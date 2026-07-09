const fs = require('fs');
fetch("https://ibb.co/q3RJZCyW")
  .then(res => res.text())
  .then(text => {
    const match = text.match(/https?:\/\/i\.ibb\.co\/[^"'\s>]+/)
    console.log(match ? match[0] : "Not found")
  })
