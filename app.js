const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes 
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/mercury", function(req, res){
    res.render("mercury.html");
});

app.get("/venus", function(req, res){
    res.render("venus.html");
});

app.get("/earth", function(req, res){
    res.render("earth.html");
});

//starting server 
//app.listen("8080", "127.0.0.1", function(){
 // console.log("Express server is running...");
//});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});

