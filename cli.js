#! /usr/bin/env node

//-----------------------------------------------------------------------------
// Corona HTML5 Builder
// (c)2018 C. Byerley (develephant)
//-----------------------------------------------------------------------------
const path = require("path")
const shell = require("shelljs")

const paths = require("./lib/paths")
const { pp } = require("./lib/clr")

const watch = require('./lib/watch')
const build = require('./lib/build')
const core = require('./lib/core')

const pkg = require('./package')
const ArgParser = require('argparse').ArgumentParser

//check we are in a valid directory
if (!shell.test('-f', path.join(paths.base, 'main.lua'))) {
  pp.dashes()
  pp.err("You must be in a project directory to run commands.")
  pp.dashes()
  return
}

const parser = new ArgParser({
  description: "Corona HTML5 Builder",
  version: pkg.version,
  prog: "coronahtml5",
  epilog: '(c)2018 C. Byerley [develephant]'
})

let subparsers = parser.addSubparsers({
  title: "commands",
  dest: "action",
  addHelp: true,
  help: "Use -h, --help for command arguments."
})

let init_parser = subparsers.addParser('init', {
  help: "Initialize the package.lua config file.",
})
init_parser.addArgument('--app', {
  action: 'store',
  help: "The Corona application project name.",
  required: true,
  metavar: "APP_NAME"
})

init_parser.addArgument('--html', {
  action: 'store',
  help: "Full path to the HTML5 output directory.",
  required: true,
  metavar: "HTML5_DIR"
})

let build_parser = subparsers.addParser('build', { 
  help: "Build the Corona HTML5 project output."
})
build_parser.addArgument('--clean', {
  action: 'storeTrue',
  help: "Clean the HTML5 output directory before build.",
  defaultValue: false
})

let watch_parser = subparsers.addParser('watch', {
  help: "Start a live browser session of the project."
})
watch_parser.addArgument(['-d', '--debug'], {
  action: 'storeTrue',
  help: "Open as debug session (index-debug.html).",
  defaultValue: false
})
watch_parser.addArgument('--proxy', {
  action: 'store',
  help: "A proxy address for the session.",
  metavar: "PROXY_ADDR"
})

const args = parser.parseArgs()

switch(args.action) {
  case 'init':
    pp.dashes()
    pp.title()
    pp.dashes()
    core(args.app, args.html)
    break
  case 'build':
    build(args.clean)
    break
  case 'watch':
    watch(args.debug, args.proxy)
    break
}
