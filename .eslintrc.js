module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    'no-use-before-define': 'off',
    'import/extensions': ['error', 'never'],
    'react/prop-types': 0,
    'no-shadow': 'off',
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/exhaustive-deps': 0,
    'import/prefer-default-export': 0,
    'global-require': 0,
    'react/style-prop-object': 0,
  },
};
