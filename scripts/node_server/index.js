const express = require('express')
const app = express();

app.get('/api/getTest', function (req, res) {
  res.send('GET request to the homepage')
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
