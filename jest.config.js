/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  cacheDirectory: ".cache/jest",
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageReporters: ["html", "json", "text-summary"],
    preset: 'ts-jest/presets/js-with-ts',    
    modulePathIgnorePatterns: ['<rootDir>/dist/', '/__fixtures__/'],
};
