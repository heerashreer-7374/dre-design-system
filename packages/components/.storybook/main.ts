import type { StorybookConfig } from '@storybook/web-components-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/addon-links'],
  framework: '@storybook/web-components-vite',
  async viteFinal(config) {
    // Project Pages URL: https://<user>.github.io/dre-design-system/
    return mergeConfig(config, {
      base: process.env.STORYBOOK_BASE ?? '/',
    })
  },
}

export default config
