const axios = require('axios');
const f = require('./ff-callback')

const functions = {
  add: (num1, num2) => num1 + num2,
}

const functions2 = {
  add2: function (numA, numB) {
    return numA + numB;
  }
}

const functions3 = {
  minus: (num1, num2) => num1 - num2,
  isNull: () => null,
  checkValue: (a) => a,
  checkFalsy: (b) => b,
  createUser: () => {
    const user = { firstname: "Brad" }
    user["lastname"] = "Traversy"
    // console.log(user);
    f.f.v(1, user)
    f.f.v(2, user)
    f.f.v(3, user)
    return user;
  },
  fetchUserPromiss: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error'),

  fetchUserAsync: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')
}

functions3.createUser()

module.exports = {
  functions,
  functions2,
  functions3,
}