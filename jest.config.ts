/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

const config: InitialOptionsTsJest = {
  cacheDirectory: '.cache/jest',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'json', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      isolatedModules: true,
    },
  },
  preset: 'ts-jest',
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/esm/',
    '/__fixtures__/',
  ],
};

export default config;
