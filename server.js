const bodyParser = require('body-parser');
const express = require ('express');
const app = express();

const PORT = process.env.PORT || 6969; 
const HOST = process.env.host || '0.0.0.0';

var path = require('path');

app.use(bodyParser.urlencoded ({extended : true}));
app.use(bodyParser.json());
app.use(express.static('./public'));
var result = [];
app.get("/", function (req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

app.get("/getData", function (req, res) {
res.send(result);
});

app.post("/sendData", (req, res) => {
  result = [...req.body.data];
  console.log(req.body.data);
  res.json({data:"hello world"});

})

app.listen(PORT, function () {
	console.log("server running on https://"+HOST+":"+PORT+"/");
});