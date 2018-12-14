const p = require('path')
const fs = require('fs')
const M = require('mustache')
const render = M.render.bind(M)
const sourceRoot = p.join(__dirname, '../lib/')
const templateRoot = p.join(__dirname, './templates/')
exports.run = function ({params, options}) {
  const [category, name] = params
  if (category === 'component') {
    const filePath = p.join(sourceRoot, `${name}.tsx`)
    const exist = fs.existsSync(filePath)
    if (exist) {
      console.error(`Error: file exists! ${filePath}`)
      process.exit(1)
    } else {
      fs.writeFileSync(filePath,
        render(fs.readFileSync(p.join(templateRoot, `component.txt`)).toString(), {name: upperFirst(name)})
      )
    }
  }
}

function upperFirst (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}