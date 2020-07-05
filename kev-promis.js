const _ = require('lodash')
const async = require('async')

function log1(arg, callback) {
  setTimeout(doStuff, 2000)
  function doStuff() {
    let something = 'foobar'
    if (_.isFunction(callback)) {
      callback(null, something)
    }
  }
}
function log2(arg, done) {
  setTimeout(doStuff, 1000)
  function doStuff() {
    let something2 = 'foobar2'
    if (_.isFunction(done)) {
      done(null, something2)
    }
  }
}
function log3(arg, done) {
  setTimeout(doStuff, 500)
  function doStuff() {
    let something = 'foobar3'
    if (_.isFunction(done)) {
      done(null, something)
    }
  }
}
function run() {
  log1(null, function (err, res) {
    log2(null, (err, res2) => {
      log3(null, (err, res3) => {
        console.log('run: ' + res + ' ' + res2 + ' ' + res3)
      })
    })
  })
}
function runAsAsync() {
  let firstThing, secondThing, thirdThing
  let fns = []
  fns.push(done => {
    log1(null, (err, res) => {
      firstThing = res
      done()
    })
  })
  fns.push(done => {
    log2(null, (err, res) => {
      secondThing = res
      done()
    })
  })
  fns.push(done => {
    log3(null, (err, res) => {
      thirdThing = res
      done()
    })
  })
  async.series(fns, () => {
    console.log('runAsAsync: ' + firstThing + ' ' + secondThing + ' ' + thirdThing)
  })
}
run()
runAsAsync()
//foobar foobar2