import express from "express";

const app = express();
app.use(express.json());
app.use((req, res, next) => {
	console.log("     [ A new request received at ] : " + Date.now());
	next();
});
const PORT = 9000;

app.use("/hawa", (req, res, next) => {
	console.log("Hawa is here");
	next();
});

app.get("/", (req, res) => {
	res.send("Welcome to our API");
});
app.get("/hawa", (req, res) => {
	res.send("Welcome to our API from hawa");
});

// Catching all invalid route
app.get("*", (req, res) => {
	res
		.status(404)
		.json({ message: `${req.url}  not found, look for available route!!!` });
});

app.listen(PORT, () => {
	console.log(`Server is running on port 🚩🚩 ${PORT}`);
});
