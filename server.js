const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
var path = require('path');
app.use(bodyParser.urlencoded ({extended : true}));
app.use(bodyParser.json());
app.use(express.static('./public'));
var result = [];
app.get("/", function (req, res) {
  res.sendFile(path.resolve('./public/views/index.html'));
});

app.get("/getData", function (req, res) {
res.send(result);
});

app.post("/sendData", (req, res) => {
  result = [...req.body.data];
  console.log(req.body.data);
  res.json({data:"hello world"});

})

app.listen(8080);
console.log("server running on 8080");