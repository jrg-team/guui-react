const base = require('./jest.config')
module.exports = Object.assign({}, base, {
  reporters: ["default", "jest-junit"],
})