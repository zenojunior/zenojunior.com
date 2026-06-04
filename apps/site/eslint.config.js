import antfu from '@antfu/eslint-config'
import eslintPluginAstro from 'eslint-plugin-astro'

export default antfu(
  {
    typescript: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
    },
    // Disable jsonc/yaml/toml/markdown since this is an Astro site
    jsonc: false,
    yaml: false,
    toml: false,
    markdown: false,
  },
  // Astro plugin configs
  ...eslintPluginAstro.configs.recommended,
  // Disable stylistic rules that conflict with Astro template syntax
  {
    files: ['**/*.astro'],
    rules: {
      'style/indent': 'off',
      'style/jsx-one-expression-per-line': 'off',
      'style/jsx-closing-tag-location': 'off',
      'style/jsx-indent': 'off',
      'style/no-tabs': 'off',
      'style/no-mixed-spaces-and-tabs': 'off',
      'style/no-multiple-empty-lines': 'off',
      // Top-level await is standard in Astro frontmatter (server-side)
      'antfu/no-top-level-await': 'off',
    },
  },
  // Project-specific overrides
  {
    rules: {
      'no-console': 'warn',
      'unused-imports/no-unused-vars': 'warn',
    },
  },
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
    ],
  },
)
