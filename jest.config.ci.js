const base = require('./jest.config')
module.exports = Object.assign({}, base, {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
  ],
  reporters: ["default", "jest-junit"],
})