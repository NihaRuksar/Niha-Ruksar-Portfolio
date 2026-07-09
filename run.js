const fetch = require('node-fetch');
fetch('https://ibb.co/m5hWKF63')
  .then(res => res.text())
  .then(text => console.log(text.match(/https:\/\/i\.ibb\.co\/[^"]+/g)[0]))
  .catch(err => console.error(err));
