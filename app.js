let express = require("express");
let app = express();
let bisection = require("./methods/bisection");
let bodyParser = require('body-parser');
let initial_value, final_value;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.render("methods/bisection/bisection");
});

app.get("/start", function(req, res){
	let bisectionResults = bisection.start(initial_value, final_value);
	res.render("methods/bisection/start", {results: bisectionResults});
});

app.post("/start", function(req, res){
	initial_value = req.body.initial_value;
	final_value = req.body.final_value;
	res.redirect("/start");
});

app.get("/*", function(req, res){
	res.send("Page not found");
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server Has Started");
});

