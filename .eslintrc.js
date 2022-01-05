module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 150,
      },
    ],
    'eol-last': ['error', 'always'],
    'linebreak-style': 0,
    'object-curly-newline': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-target-blank': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: ['./src/stories/**'],
    //   },
    // ],
  },
};
