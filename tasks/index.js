#!/usr/bin/env node
const p = require('path')
const optionMap = {
  '-h': '--help',
}
const args = Array.from(process.argv).slice(2)
const params = args.filter(i => i.charAt(0) !== '-')
const rowOptions = args.filter(i => i.charAt(0) === '-')
const options = rowOptions.map(i => optionMap[i] || i)
const firstParam = params[0]

if (firstParam) {
  let task
  try {
    task = require(p.join(__dirname, `./${firstParam}`))
  } catch (error) {
    const {code} = error
    if (code === 'MODULE_NOT_FOUND') {
      console.log(`${firstParam} task is not found`)
    }
  }
  task.run({params: params.slice(1), options})
}
