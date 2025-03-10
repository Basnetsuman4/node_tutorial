import express from "express";

const app = express();
app.use(express.json());

const PORT = 9000;

app.get("/things/:name/:id([0-9]{5})", (req, res) => {
	const { name, id } = req.params;
	res.json({ id, name });
});

app.get("*", (req, res) => {
	res.status(404).json({ message: `${req.url}  not found` });
});

app.listen(PORT, () => {
	console.log(`Server is running on port 🚩🚩 ${PORT}`);
});
