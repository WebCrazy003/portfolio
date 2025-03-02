module.exports = {
  extends: [
    'airbnb', // Base Airbnb configuration
    'prettier', // Prettier configuration (turns off conflicting rules)
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'], // Add the Prettier plugin
  rules: {
    'prettier/prettier': 'error', // Enforce Prettier formatting
    'react/react-in-jsx-scope': 'off', // Disable this rule in React 17+
    'react/jsx-filename-extension': 'off',
    'no-plusplus': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
