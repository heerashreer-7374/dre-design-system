import StyleDictionary from 'style-dictionary'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pkgRoot = path.resolve(__dirname, '..')
const dist = path.join(pkgRoot, 'dist')

function tokenName(pathSegments: string[]) {
  return ['dre', ...pathSegments]
    .join('-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_/]+/g, '-')
    .toLowerCase()
}

function tokenValue(t: { value?: unknown; $value?: unknown }) {
  return t.$value ?? t.value
}

function buildCssVars(
  dictionary: { allTokens: Array<{ path: string[]; value?: unknown; $value?: unknown }> },
  selector: string,
) {
  const lines = dictionary.allTokens.map(
    (t) => `  --${tokenName(t.path)}: ${String(tokenValue(t))};`,
  )
  return `${selector} {\n${lines.join('\n')}\n}\n`
}

async function buildMode(mode: 'light' | 'dark') {
  const sd = new StyleDictionary({
    source: [
      path.join(pkgRoot, 'src/tokens/base/**/*.json'),
      path.join(pkgRoot, `src/tokens/functional/color.${mode}.json`),
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: `${path.join(dist, 'css')}/`,
        files: [
          {
            destination: `tokens.${mode}.css`,
            format: 'dre/css',
            options: {
              selector: mode === 'light' ? ':root, [data-theme="light"]' : '[data-theme="dark"]',
            },
          },
        ],
      },
      json: {
        transformGroup: 'js',
        buildPath: `${path.join(dist, 'json')}/`,
        files: [
          {
            destination: `tokens.${mode}.json`,
            format: 'dre/json',
          },
        ],
      },
    },
  })

  sd.registerFormat({
    name: 'dre/css',
    format: ({ dictionary, options }) => {
      const selector = (options as { selector?: string }).selector || ':root'
      return buildCssVars(dictionary as never, selector)
    },
  })

  sd.registerFormat({
    name: 'dre/json',
    format: ({ dictionary }) => {
      const flat: Record<string, unknown> = {}
      for (const t of dictionary.allTokens) {
        flat[tokenName(t.path)] = tokenValue(t as { value?: unknown; $value?: unknown })
      }
      return `${JSON.stringify(flat, null, 2)}\n`
    },
  })

  await sd.hasInitialized
  await sd.buildAllPlatforms()
}

async function main() {
  fs.rmSync(dist, { recursive: true, force: true })
  fs.mkdirSync(path.join(dist, 'css'), { recursive: true })
  fs.mkdirSync(path.join(dist, 'json'), { recursive: true })

  await buildMode('light')
  await buildMode('dark')

  const light = fs.readFileSync(path.join(dist, 'css/tokens.light.css'), 'utf8')
  const dark = fs.readFileSync(path.join(dist, 'css/tokens.dark.css'), 'utf8')
  fs.writeFileSync(path.join(dist, 'css/tokens.css'), `${light}\n${dark}`)

  const lightJson = JSON.parse(fs.readFileSync(path.join(dist, 'json/tokens.light.json'), 'utf8'))
  const darkJson = JSON.parse(fs.readFileSync(path.join(dist, 'json/tokens.dark.json'), 'utf8'))
  fs.writeFileSync(
    path.join(dist, 'index.js'),
    `export const light = ${JSON.stringify(lightJson, null, 2)};\nexport const dark = ${JSON.stringify(darkJson, null, 2)};\nexport default light;\n`,
  )
  fs.writeFileSync(
    path.join(dist, 'index.d.ts'),
    `export declare const light: Record<string, string | number>;\nexport declare const dark: Record<string, string | number>;\ndeclare const _default: typeof light;\nexport default _default;\n`,
  )

  console.log('✓ @dre/tokens built → dist/css + dist/json + dist/index.js')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
