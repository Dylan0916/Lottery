const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  // setupFiles: ['<rootDir>/config/jest/setup.js'],
  // setupFilesAfterEnv: ['<rootDir>/config/jest/setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  // additional prop from a github issue: https://github.com/zeit/next.js/issues/8663
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  // default testRegex
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  // only test with folder in __tests__
  testRegex: '/__tests__/(.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', 'src/theme'],
  coverageReporters: ['json', 'lcov', 'text'],
  globals: {
    window: {},
  },
};
