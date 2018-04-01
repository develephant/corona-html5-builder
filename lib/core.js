const os = require('os')
const path = require('path')
const shell = require('shelljs')

const { pp } = require('./clr')
const paths = require('./paths')

module.exports = function(appName, htmlDir) {
  pp.dashes()
  pp.title()
  pp.dashes()
  
  pp.info("Creating package.lua")

  let package_lua = path.join(paths.base, 'package.lua')

  shell.cp(path.join(paths.cli.utils, 'package_tpl.lua'), package_lua)

  let html_dest_dir = htmlDir
  let project_path = paths.base

  if (os.platform == 'win32') {
    html_dest_dir = html_dest_dir.replace(/\\/g, "\\\\")
    project_path = project_path.replace(/\\/g, "\\\\")
  }

  shell.sed('-i', 'APPNAME', appName, package_lua)
  shell.sed('-i', 'DESTDIR', html_dest_dir, package_lua)
  shell.sed('-i', 'PROJECTPATH', project_path, package_lua)

  pp.ok("All done!")
  pp.dashes()
}