let count = 0;

const f = {

  v: function (num, obj) {
    count += 1;

    console.log('\n' +
      '[' + num + ']' +
      '_______________________' +
      '[' + count + ']' + '\n' +

      __filename + '\n' +
      new Date() + '\n' +
      '[' + JSON.stringify(obj) + ']' + '\n' +
      '____________________________' + '\n'
    )
  }
}

module.exports = { f }