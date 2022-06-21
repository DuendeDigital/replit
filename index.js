const mySecret = process.env['KEY_TOKEN']
console.log(mySecret);

var x = 1;
var y = 2;

function dataFeed(data){
  return data;
}

const axios = require('axios').default;

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });