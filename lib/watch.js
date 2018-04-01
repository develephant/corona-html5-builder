//-----------------------------------------------------------------------------
// Corona HTML5 Watcher
//-----------------------------------------------------------------------------
const path = require("path")
const bs = require("browser-sync").create()

const { pp } = require("./clr")
const paths = require("./paths")
const config = require("./corona_conf")

module.exports = function(withDebug) {
  let corona_conf = config()

  let debugPage = null
  if (withDebug) {
    debugPage = 'index-debug.html'
  }

  bs.watch(path.join(corona_conf.dstPath, corona_conf.appName, '/*.data'), function(event, file) {
    if (event == 'change') {
      bs.reload()
    }
  })

  bs.init({
    server: path.join(corona_conf.dstPath, corona_conf.appName),
    startPath: debugPage || '/',
    files: path.join(corona_conf.dstPath, corona_conf.appName),
    injectChanges: false,
    reloadDelay: 1000,
    notify: false,
    ui: false,
  })
}
