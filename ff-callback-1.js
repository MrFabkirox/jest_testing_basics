// transition version ff-callback-2 and ff-callback better now
const _ = require('lodash')
let count = 0;

function welcomeMess(arg, callback) {
  setTimeout(sayHi, 2000)
  function sayHi() {
    let greetings = 'bonjour'
    console.log(greetings)
    if (_.isFunction(callback)) {
      callback(null, greetings)
    }
  }
}
function caVa(arg, callback) {
  setTimeout(commentVa, 4000)
  function commentVa() {
    let va = 'comment ca va?'
    console.log(va)
    if (_.isFunction(callback)) {
      callback(null, va)
    }
  }
}
function byeMess(arg, callback) {
  setTimeout(sayBye, 1000)
  function sayBye() {
    let greetbye = 'au revoir'
    console.log(greetbye)
    if (_.isFunction(callback)) {
      callback(null, greetbye)
    }
  }
}
function politness() {
  welcomeMess(null, function (err, res) {
    caVa(null, (err, res2) => {
      byeMess(null, (err, res3) => {
        console.log(res + res2 + res3)
      })
    })
  })

}


const f = {

  v: function (num, obj) {
    count += 1;

    politness()

    console.log('\n' +
      '[' + num + ']' +
      '_______________________' +
      '[' + count + ']' + '\n')

    console.log('\n' +
      __filename + '\n')

    console.log('\n' +
      new Date() + '\n' +
      '[' + JSON.stringify(obj) + ']' + '\n')

    console.log('\n' +
      '____________________________' + '\n'
    )
  }
}

module.exports = { f }