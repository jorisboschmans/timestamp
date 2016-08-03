var express = require("express");
var app = express();

app.get("/:date", function(req, res){
	var date = req.params.date;

	if (date.match(/^[0-9]{10}$/)) // UNIX input
		date = new Date(+date * 1000);
	else
		date = new Date(date);

	var text = {
		unix: date.getTime(),
		natural: date.toDateString()
	}

	res.end(JSON.stringify(text));
});

app.listen(process.env.PORT || 3000, function(){
	console.log("App is listening...");
});