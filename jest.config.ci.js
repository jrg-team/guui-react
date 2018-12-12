const base = require('./jest.config')
module.exports = Object.assign({}, base, {
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
})