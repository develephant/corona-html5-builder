//-----------------------------------------------------------------------------
// Corona HTML5 Builder
// (c)2018 C. Byerley (develephant)
//-----------------------------------------------------------------------------
const path = require('path')

const clibase = path.resolve(__dirname, '..')
const libbase = path.join(clibase, 'lib')
const appbase = process.cwd()

module.exports = {
  base: appbase,
  output_html5: path.join(appbase, 'html5'),
  cli: {
    base: clibase,
    utils: path.join(clibase, 'utils')
  }
}
