/* transition version to play around experimenting
with kevin s application of async */

const async = require('async');
const _ = require('lodash')
let count = 0;

function showHeader(arg, callback) {
  setTimeout(showH, 2000)
  function showH() {
    let head1 = '1---------'
    let head11 = '11---------'
    console.log(head1)
    if (_.isFunction(callback)) {
      callback(null, head11)
    }
  }
}
function showHeader2(arg, callback) {
  setTimeout(showH2, 2000)
  function showH2() {
    let head2 = '2---------'
    let head22 = '22---------'
    console.log(head2)
    if (_.isFunction(callback)) {
      callback(null, head22)
    }
  }
}
function showHeader3() {
  setTimeout(showH3, 2000)
  function showH3() {
    let head3 = '3---------'
    let head33 = '33---------'
    console.log(head3)
  }
}
function showHeader4() {
  setTimeout(showH4, 2000)
  function showH4() {
    let head3 = '4---------'
    console.log(head4)
  }
}

const f = {

  v: function (num, obj) {
    let header, header2;
    count += 1;

    let fns = []

    fns.push(done => {
      showHeader(null, (err, res) => {
        console.log("5---------")
        header = res
        console.log(header)
        done()
      })
    })
    fns.push(done => {
      showHeader2(null, (err, res2) => {
        console.log("6---------")
        header2 = res2
        done()
      })
    })
    fns.push(done => {
      showHeader3(null, (err, res) => {
        console.log("7---------")
        // header3 = res
        done()
      })
    })
    fns.push(done => {
      showHeader4(null, (err, res) => {
        console.log("8---------")
        // header4 = res
        done()
      })
    })

    async.series(fns, () => {
      console.log('async ----- '
        + header
        + header2
        + header3
        + header4
      )
    })

    console.log('\n' +
      '[' + num + ']' +
      '__________' +
      '[' + count + ']' + '\n' +

      __filename + '\n' +
      new Date() + '\n' +
      '[' + JSON.stringify(obj) + ']' + '\n' +
      '__________' + '\n'
    )
  }
}

module.exports = { f }