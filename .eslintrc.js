module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react-hooks',
    '@typescript-eslint',
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    'jsx-a11y/control-has-associated-label': 0,
    camelcase: 0,
    'import/prefer-default-export': 0,
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/button-has-type': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'max-len': [
      1,
      140,
      2,
    ],
    'jsx-a11y/label-has-associated-control': [2, {
      labelComponents: ['label'],
      labelAttributes: ['htmlFor'],
      controlComponents: ['input'],
    }],
    'jsx-a11y/label-has-for': [2, {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'react/prop-types': [
      0,
    ],
    'react/destructuring-assignment': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/jsx-one-expression-per-line': [
      0,
      {
        allow: 'literal',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: './',
      },
    ],
    'import/no-unresolved': [
      2,
      {
        ignore: [
          '^app/.+$',
        ],
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    ],
    'import/extensions': [0,  [".js", ".jsx", ".json", ".ts", ".tsx"]],
    'quotes': ['error', 'single'],
    'no-unused-vars': 'error',
  },
};
