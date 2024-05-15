const mongoose = require("mongoose")

mongoose
	.connect("mongodb+srv://said:said12@cluster0.rpvry8o.mongodb.net/", { useNewUrlParser: true })
	.then(() => {
		console.log("connect mydb");

	})