#! /usr/bin/env node

//-----------------------------------------------------------------------------
// Corona HTML5 Plugin CLI
//-----------------------------------------------------------------------------
const path = require("path")

const paths = require("./lib/paths")

const watch = require('./lib/watch')
const build = require('./lib/build')
const core = require('./lib/core')

const pkg = require('./package')
const ArgParser = require('argparse').ArgumentParser

const parser = new ArgParser({
  description: "Corona HTML5 Watcher",
  version: pkg.version,
  allowAbbrev: false,
  epilog: '(c)2018 C. Byerley [develephant]'
})

parser.addArgument('action', {
  help: "Corona HTML5 Watcher",
  choices: [
    'init',
    'build',
    'watch',
    'debug'
  ]
})

parser.addArgument('--app',
{help: 'The application name.',
metavar: 'APP_NAME'})

parser.addArgument('--html',
{help: 'The html output directory.',
metavar: 'HTML_DIR'})

parser.addArgument('--proxy',
{help: 'Proxy address. For watch and debug command.',
metavar: 'PROXY_ADDR'})

const args = parser.parseArgs()

switch(args.action) {
  case 'init':
    core(args.app, args.html)
    break
  case 'build':
    build()
    break
  case 'watch':
    watch(false, args.proxy)
    break
  case 'debug':
    watch(true, args.proxy)
    break
}
