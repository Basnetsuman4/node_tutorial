import mongoose from "mongoose";

const MONGODB_URI =
	"mongodb+srv://arunbasnet54:arunbasnet54@cluster0.vklq2.mongodb.net/express";

export const connectDataBase = mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log("DataBase connected successfully  🚀🚀🚀");
	})
	.catch((err) => console.log(err));
