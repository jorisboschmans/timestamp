var express = require("express");
var app = express();

function numberToMonth(number){
	switch (number){
		case 0:
			return "January";
		case 1:
			return "February";
		case 2:
			return "March";
		case 3:
			return "April";
		case 4:
			return "May";
		case 5:
			return "June";
		case 6:
			return "July";
		case 7:
			return "August";
		case 8:
			return "September";
		case 9:
			return "October";
		case 10:
			return "November";
		case 11:
			return "December";
	}
}

app.get("/:date", function(req, res){
	var date = req.params.date;

	if (date.match(/^[0-9]+$/)) // UNIX input
		date = new Date(+date * 1000);
	else
		date = new Date(date);

	if (date.getTime()){
		var text = {
			unix: date.getTime(),
			natural: numberToMonth(date.getMonth()) + " " + date.getDate() + ", " + date.getFullYear()
		};
	} else {
		var text = {
			unix: null,
			natural: null
		};
	}

	

	res.end(JSON.stringify(text));
});

app.listen(process.env.PORT || 3000, function(){
	console.log("App is listening...");
});