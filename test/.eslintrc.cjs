/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

module.exports = {
  extends: '../.eslintrc.cjs',
  // Allow describe and it
  env: { mocha: true },
  rules: {
    '@typescript-eslint/no-misused-promises': 'off',
    // Allow assert style expressions. i.e. expect(true).to.be.true
    'no-unused-expressions': 'off',

    // It is common for tests to stub out method.
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    // Return types are defined by the source code. Allows for quick overwrites.
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Mocked out the methods that shouldn't do anything in the tests.
    '@typescript-eslint/no-empty-function': 'off',
    // Easily return a promise in a mocked method.
    '@typescript-eslint/require-await': 'off',
  },
  ignorePatterns: ['package/resources/**/*'],
};