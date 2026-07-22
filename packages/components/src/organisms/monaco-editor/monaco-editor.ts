import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import loader from '@monaco-editor/loader'
import type * as Monaco from 'monaco-editor'

/**
 * Thin Monaco wrapper for DRE IDE previews.
 * Renders into light DOM so Monaco's absolute positioning/styles work.
 */
@customElement('dre-monaco-editor')
export class DreMonacoEditor extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 0;
      position: relative;
    }
  `

  @property() value = ''
  @property() language = 'javascript'
  @property({ type: Boolean, attribute: 'read-only' }) readOnly = false
  @property({ type: Boolean }) minimap = false

  #editor?: Monaco.editor.IStandaloneCodeEditor
  #monaco?: typeof Monaco
  #host = document.createElement('div')

  protected override createRenderRoot() {
    return this
  }

  override connectedCallback() {
    super.connectedCallback()
    this.style.display = 'block'
    this.style.width = '100%'
    this.style.height = '100%'
    this.style.minHeight = '0'
    this.style.position = 'relative'
    Object.assign(this.#host.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
    })
    if (!this.#host.isConnected) this.appendChild(this.#host)
    void this.#mount()
  }

  override disconnectedCallback() {
    this.#editor?.dispose()
    this.#editor = undefined
    super.disconnectedCallback()
  }

  override updated(changed: Map<string, unknown>) {
    if (!this.#editor) return
    if (changed.has('value') && this.#editor.getValue() !== this.value) {
      this.#editor.setValue(this.value)
    }
    if (changed.has('language') && this.#monaco) {
      const model = this.#editor.getModel()
      if (model) this.#monaco.editor.setModelLanguage(model, this.language)
    }
    if (changed.has('readOnly') || changed.has('minimap')) {
      this.#editor.updateOptions({
        readOnly: this.readOnly,
        minimap: { enabled: this.minimap },
      })
    }
  }

  async #mount() {
    if (this.#editor) return

    loader.config({
      paths: {
        vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs',
      },
    })
    const monaco = (await loader.init()) as unknown as typeof Monaco
    this.#monaco = monaco
    this.#registerDelugeLanguage(monaco)

    this.#editor = monaco.editor.create(this.#host, {
      value: this.value,
      language: this.language === 'deluge' ? 'deluge' : this.language,
      readOnly: this.readOnly,
      automaticLayout: true,
      minimap: { enabled: this.minimap },
      fontSize: 13,
      lineHeight: 20,
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Space Mono', monospace",
      lineNumbers: 'on',
      glyphMargin: false,
      folding: false,
      lineDecorationsWidth: 16,
      lineNumbersMinChars: 3,
      renderLineHighlight: 'line',
      scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 },
      padding: { top: 20, bottom: 20 },
      scrollBeyondLastLine: false,
      overviewRulerLanes: 0,
      hideCursorInOverviewRuler: true,
      overviewRulerBorder: false,
      theme: 'dre-light',
    })

    this.#editor.onDidChangeModelContent(() => {
      const next = this.#editor?.getValue() ?? ''
      if (next !== this.value) {
        this.value = next
        this.dispatchEvent(
          new CustomEvent('dre-change', {
            detail: { value: next },
            bubbles: true,
            composed: true,
          }),
        )
      }
    })
  }

  #registerDelugeLanguage(monaco: typeof Monaco) {
    if (!monaco.languages.getLanguages().some((l) => l.id === 'deluge')) {
      monaco.languages.register({ id: 'deluge' })
      monaco.languages.setMonarchTokensProvider('deluge', {
        keywords: ['if', 'else', 'for', 'while', 'return', 'info', 'alert', 'true', 'false', 'null'],
        tokenizer: {
          root: [
            [new RegExp('//.*$'), 'comment'],
            [new RegExp('"(?:[^"\\\\]|\\\\.)*"'), 'string'],
            [new RegExp('\\b(?:if|else|for|while|return|info|alert|true|false|null)\\b'), 'keyword'],
            [new RegExp('\\b[a-zA-Z_][\\w]*\\b'), 'identifier'],
            [new RegExp('[=<>!]+'), 'operator'],
            [new RegExp('[(){}\\[\\]]+'), 'delimiter'],
            [new RegExp('\\d+(?:\\.\\d+)?'), 'number'],
          ],
        },
      })
    }

    monaco.editor.defineTheme('dre-light', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '5d6481' },
        { token: 'string', foreground: '089949' },
        { token: 'keyword', foreground: '0d6dfd' },
        { token: 'identifier', foreground: '0d6dfd' },
        { token: 'number', foreground: '13141a' },
      ],
      colors: {
        'editor.background': '#ffffff',
        'editor.foreground': '#13141a',
        'editorLineNumber.foreground': '#8c92ac',
        'editorLineNumber.activeForeground': '#5d6481',
        'editor.lineHighlightBackground': '#f7f7f9',
        'editor.selectionBackground': '#bdd8fe66',
        'editorCursor.foreground': '#0d6dfd',
        'editorIndentGuide.background': '#e6e8ed',
      },
    })
  }

  override render() {
    return html``
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-monaco-editor': DreMonacoEditor
  }
}
