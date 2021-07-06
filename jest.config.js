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
  moduleFileExtensions: [
    'js',
    'json',
    'node',
    'ts'
  ],
  projects: [{
    displayName: 'test',
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
        diagnostics: true
      }
    },
    preset: 'ts-jest/presets/js-with-ts',
    testMatch: [
      '**/__tests__/*.test.[jt]s'
    ],
    testPathIgnorePatterns: [
      '/built/'
    ]
  }]
};
