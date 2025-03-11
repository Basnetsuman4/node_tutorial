import express from "express";

const app = express();
app.use(express.json());

const PORT = 9000;

// Set EJS as the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	const userName = "John Doe";
	res.render(`index`, { userName });
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
