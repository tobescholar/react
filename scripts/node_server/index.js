const express = require('express');
const app = new express();
const path = require('path');
const bodyParser = require('body-parser')
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.static(path.join(__dirname, './')));
app.use(express.static('src'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const resData = (obj = {}) => ({
  status: obj.status || 'success',
  code: obj.code || 200,
  msg: obj.msg || null,
  data: obj.data || null,
});

app.get('/api/getTest', function (req, res) {
  const response = resData({
    data: {
      text: '/api/getTest is Success!',
    }
  })
  res.send(response)
});
app.post('/api/postTest', function (req, res) {
  res.send('POST request to the homepage')
})
for(let i = 0; i < 5; i++) {
  app.get('/api/getTest' + i, function (req, res) {
    res.send('POST request to the homepage')
  })
}

app.listen(3441);
