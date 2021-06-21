var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();


app.get('/', (request, response) => {
    response.send("Hello World!");
  })

app.listen(PORT, function() {
console.log(`Example app listening at http://localhost:${PORT}`);
})