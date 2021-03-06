//-----------------------------------------------------------------------------
// Corona HTML5 Builder
// (c)2018 C. Byerley (develephant)
//-----------------------------------------------------------------------------
const path = require("path")
const bs = require("browser-sync").create()

const { pp } = require("./clr")
const paths = require("./paths")
const config = require("./corona_conf")

module.exports = function(withDebug, proxy) {
  let corona_conf = config()

  let debugPage = null
  if (withDebug) {
    debugPage = 'index-debug.html'
  }

  bs.watch(path.join(corona_conf.dstPath, corona_conf.appName, '/*.data'), function(event, file) {
    if (event == 'change' || event == 'add') {
      bs.reload()
    }
  })

  if (proxy) {
    bs.init({
      proxy: proxy,
      serveStatic: [path.join(corona_conf.dstPath, corona_conf.appName)],
      startPath: debugPage || '/',
      injectChanges: false,
      reloadDelay: 1000,
      notify: false,
      ui: false
    })
  } else {
    bs.init({
      server: path.join(corona_conf.dstPath, corona_conf.appName),
      startPath: debugPage || '/',
      injectChanges: false,
      reloadDelay: 1000,
      notify: false,
      ui: false,
    })
  }
}
