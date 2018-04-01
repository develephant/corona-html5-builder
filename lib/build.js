//-----------------------------------------------------------------------------
// Corona HTML5 Builder
// (c)2018 C. Byerley (develephant)
//-----------------------------------------------------------------------------
const os = require('os')
const path = require('path')
const shell = require('shelljs')

const { pp } = require('./clr')
const paths = require('./paths')

module.exports = function() {
  var luapackage = path.join(paths.base, 'package.lua');

  if (os.platform() == 'darwin') {

    shell.cd(path.join(paths.cli.utils, 'macos'))
    
    pp.dashes()
    pp.info("Sending Build Request...")
    pp.dashes()

    shell.exec('./make.sh '+luapackage, function(code) {
      if (code === 0) {
        pp.dashes()
        pp.ok("Build Request Done.")
        pp.dashes()
      }
    })

  } else if (os.platform() == 'win32') {

    shell.cd(path.join(paths.cli.utils, 'win32'))
    
    pp.dashes()
    pp.info("Sending Build Request...")
    pp.dashes()
    
    shell.exec('make.bat "'+luapackage+'"', function(code) {
      if (code === 0) {
        pp.dashes()
        pp.ok("Build Request Done.")
        pp.dashes()
      }
    })      

  } else {
    pp.dashes()
    pp.err('Not available on this platform.')
    pp.dashes()
  }
}
