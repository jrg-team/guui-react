const p = require('path')
const fs = require('fs')
const M = require('mustache')
const render = M.render.bind(M)
const customTags = ['{%', '%}']
const sourceRoot = p.join(__dirname, '../lib/')
const exampleRoot = p.join(__dirname, '../examples/')
const templateRoot = p.join(__dirname, './templates/')
exports.run = function ({params, options}) {
  const [category, name] = params
  const upperName = upperFirst(name)
  if (category === 'fc') {
    ensureDirSync(p.join(sourceRoot, `${name}/`))
    const filePath = p.join(sourceRoot, `${name}/${name}.tsx`)
    const examplePath = p.join(exampleRoot, `${name}.example.tsx`)
    ensureNotFound(filePath, examplePath)
    write(filePath, fs.readFileSync(p.join(templateRoot, `f-component.txt`)))
    write(examplePath, fs.readFileSync(p.join(templateRoot, `example.txt`)))
    addRoute()
    addExport()
  } else if (category === 'c') {
    ensureDirSync(p.join(sourceRoot, `${name}/`))
    const filePath = p.join(sourceRoot, `${name}/${name}.tsx`)
    const examplePath = p.join(exampleRoot, `${name}.example.tsx`)
    ensureNotFound(filePath, examplePath)
    write(filePath, fs.readFileSync(p.join(templateRoot, `component.txt`)))
    write(examplePath, fs.readFileSync(p.join(templateRoot, `example.txt`)))
    addRoute()
    addExport()
  }

  function write(path, data) {
    fs.writeFileSync(path, render(data.toString(), {name, upperName}, {}, customTags))
  }

  function ensureNotFound(...paths) {
    paths.map(path => {
      const exist = fs.existsSync(path)
      if (exist) {
        console.error(`Error: file exists! ${path}`)
        process.exit(1)
      }
    })
  }

  function addExport() {
    const path = p.join(__dirname, '../lib/index.tsx')
    fs.appendFileSync(path, '\n' + `export {default as ${upperName}} from './${name}/${name}';` + '\n', 'utf8')
  }

  function addRoute() {
    const path = p.join(__dirname, '../example.tsx')
    let exampleFile = fs.readFileSync(path).toString()
    exampleFile = exampleFile.replace(/\n(\s*)(void 'examples 不要改动这一行代码！)/, (match, c1, c2) => {
      return `${c1}import ${upperName}Example from 'examples/${name}.example';` +
        `\n${c1}${c2}`
    })
    exampleFile = exampleFile.replace(/\n(\s*)({void 'links 不要改动这一行代码！)/, (match, c1, c2) => {
      return `\n${c1}<li><Link to="/${name}">${upperName}</Link></li>` +
        `\n${c1}${c2}`
    })
    exampleFile = exampleFile.replace(/\n(\s*)({void 'routes 不要改动这一行代码！)/, (match, c1, c2) => {
      return `\n${c1}<Route path="/${name}" component={${upperName}Example}/>` +
        `\n${c1}${c2}`
    })
    fs.writeFileSync(path, exampleFile)
  }
}


function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function ensureDirSync(path) {
  if (fs.existsSync(path)) {
    return
  }
  fs.mkdirSync(path)
}