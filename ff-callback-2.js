// good version 1
const _ = require('lodash')
let count = 0;

function headerNum(n, callback) {
  setTimeout(showNum, 1000)
  count += 1;
  function showNum() {
    let numz = '\n' + n +
      "____________________________________________" +
      count + '\n'
    console.log(numz)
    if (_.isFunction(callback)) {
      callback(null, numz)
    }
  }
}

function showFilename(arg, callback) {
  setTimeout(showFn, 1000)
  function showFn() {
    let fileName = '\n' + __filename + '\n'
    console.log(fileName)
    // console.trace()
    if (_.isFunction(callback)) {
      callback(null, fileName)
    }
  }
}

function showTime(arg, callback) {
  setTimeout(showT, 1000)
  function showT() {
    let time = '\n' + new Date() + '\n'
    console.log(time)
    if (_.isFunction(callback)) {
      callback(null, time)
    }
  }
}

function showObject(object, callback) {
  setTimeout(showO, 1000)
  function showO() {
    let objDisplay = '\n' + JSON.stringify(object) + '\n'
    console.log(objDisplay)
    if (_.isFunction(callback)) {
      callback(null, objDisplay)
    }
  }
}

function displayAll(nChosen, curriousObj) {
  headerNum(nChosen, function (err, res) {
    showFilename(null, (err, res2) => {
      showTime(null, (err, res3) => {
        showObject(curriousObj, (err, res4) => {
        })
      })
    })
  })
}

const f = {

  v: function (numChosen, obj) {

    displayAll(numChosen, obj)

  }
}

module.exports = { f }