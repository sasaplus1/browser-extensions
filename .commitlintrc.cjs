/*
eslint
node/no-unpublished-require: [
  'error', {
    allowModules: ['@commitlint/config-conventional']
  }
]
*/

const { rules } = require('@commitlint/config-conventional');

const [level, applicable] = rules['subject-case'];

module.exports = {
  extends: [
    '@commitlint/config-conventional',
    '@commitlint/config-lerna-scopes'
  ],
  rules: {
    // https://github.com/conventional-changelog/commitlint/issues/2141
    'subject-case': [level, applicable, []]
  }
};
