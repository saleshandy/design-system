/* eslint-env node */

module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transform: {
    '^.+\\.svg$': '<rootDir>/svg-transform.ts',
  },
};
