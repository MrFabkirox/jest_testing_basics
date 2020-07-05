/* good version 1 of the ff async version ? 
temporrary good version in ff-async */

const async = require('async');
const _ = require('lodash')

let count = 0;

function showHeader(arg, callback) {
  setTimeout(showH, 1000)
  function showH() {
    count += 1
    let time = new Date()
    let head = arg + '____1________' + time + '____________' + count
    console.log(head)
    if (_.isFunction(callback)) {
      callback(null, head)
    }
  }
}
function showFilename(arg, callback) {
  setTimeout(showF, 1000)
  function showF() {
    let fileName = __filename
    console.log(fileName)
    if (_.isFunction(callback)) {
      callback(null, fileName)
    }
  }
}
function showObject(arg, callback) {
  setTimeout(showO, 1000)
  function showO() {
    let object = arg
    // let object = JSON.stringify(arg)
    console.log(object)
    if (_.isFunction(callback)) {
      callback(null, object)
    }
  }
}

const f = {

  v: function (num, obj) {
    let header, fn, objct;
    count += 1;

    let fns = []

    fns.push(done => {
      showHeader(num, (err, res) => {
        header = res
        done()
      })
    })
    fns.push(done => {
      showFilename(null, (err, res) => {
        fn = res
        done()
      })
    })
    fns.push(done => {
      showObject(obj, (err, res) => {
        objct = res
        done()
      })
    })

    async.series(fns, () => {
      console.log(
        '\n' +
        '------------------------------------------------------'
        + '\n'
        + header + '\n'
        + fn + '\n'
        + objct + '\n'
      )
    })
  }
}

module.exports = { f }