module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   globals: {
      JSX: true,
   },
   extends: ['plugin:react/recommended', 'airbnb'],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint'],
   rules: {
      'react/no-array-index-key': 'off',
      'consistent-return': 'off',
      'semi-style': 'off',
      'no-nested-ternary': 'off',
      'import/prefer-default-export': 'off',
      'spaced-comment': ['warn'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'react/jsx-wrap-multilines': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-boolean-value': 'off',
      'function-paren-newline': 'off',
      'operator-linebreak': 'off',
      'implicit-arrow-linebreak': 'off',
      'no-trailing-spaces': 'off',
      indent: ['off'],
      'react/jsx-indent': ['off'],
      'react/jsx-indent-props': ['off'],
      'no-tabs': 0,
      'react/require-default-props': 'off',
      'no-unneeded-ternary': 'off',
      'no-confusing-arrow': 'off',
      'no-bitwise': 0,
      'no-param-reassign': 0,
      'arrow-body-style': ['warn', 'as-needed'],
      'react/prop-types': 'off',
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'linebreak-style': 0,
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'react/jsx-props-no-spreading': 'off',
      'no-underscore-dangle': 'off',
      'object-curly-newline': 'off',
      'dot-notation': 'off',
      'no-console': 'warn',
      semi: 'off',
      'import/extensions': [
         'error',
         'ignorePackages',
         {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
         },
      ],
      'import/order': [
         'error',
         {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
               {
                  pattern: 'react',
                  group: 'external',
                  position: 'before',
               },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            alphabetize: {
               order: 'asc',
               caseInsensitive: true,
            },
         },
      ],
   },
   settings: {
      'import/resolver': {
         node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            paths: ['./src'],
         },
      },
   },
}
