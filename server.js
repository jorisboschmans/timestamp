var express = require("express");
var app = express();

app.get("/", function(req, res){
	//var date = req.params.date;
	res.end("Hello World!");
});

app.listen(process.env.PORT, function(){
	console.log("App is listening on port 3000");
});