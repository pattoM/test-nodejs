const express = require("express");
const app = express() 

app.get("/",(req, res) => {
	res.send("<h1>My page </h1>"); 
}); 

app.listen(5000, () => {
	console.log("App running on port 5000"); 

}); 


