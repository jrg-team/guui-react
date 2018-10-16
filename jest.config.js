// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: false,
  collectCoverage: false,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['<rootDir>/test/**/*.test.tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};


