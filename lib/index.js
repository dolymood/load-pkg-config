var path = require('path')
var resolve = require('resolve-pkg')

var runCwd = process.cwd()
function load (name, cwd) {
  var pkg
  if (!cwd) {
    cwd = runCwd
  }
  var modulePath = cwd
  if (name !== '.') {
    modulePath = resolve(name, {
      cwd: cwd
    })
  }
  pkg = require(path.join(modulePath, 'package.json'))
  pkg.modulePath = modulePath
  return pkg
}

module.exports = load
