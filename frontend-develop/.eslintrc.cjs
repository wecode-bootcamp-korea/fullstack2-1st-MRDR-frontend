module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'import', 'no-relative-import-paths'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-relative-import-paths/no-relative-import-paths': ['warn', { allowSameFolder: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          { pattern: 'react', group: 'builtin', position: 'after' },
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: 'react-dom', group: 'builtin', position: 'after' },
          { pattern: 'apis/**', group: 'internal' },
          { pattern: 'pages/**', group: 'internal' },
          { pattern: 'components/**', group: 'internal' },
          { pattern: 'hooks/**', group: 'internal' },
          { pattern: 'router/**', group: 'internal' },
          { pattern: 'store/**', group: 'internal' },
          { pattern: 'styles/**', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-dom'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
};
