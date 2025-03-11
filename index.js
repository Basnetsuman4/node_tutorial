import express from "express";

const app = express();
app.use(express.json());

const PORT = 9000;

app.use(express.static("public"));

app.use("/images", express.static("images"));
app.get("/", (req, res) => {
	res.send(`Hello Express`);
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
