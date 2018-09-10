let express = require("express");
let app = express();
let bisection = require("./methods/bisection");
let bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.render("methods/bisection/bisection")
});

app.get("/start", function(req, res){
	let bisectionResults = bisection.start();
	console.log(bisectionResults);
	res.render("methods/bisection/start", {results: bisectionResults});
});

app.get("/*", function(req, res){
	res.send("Page not found");
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server Has Started");
});

