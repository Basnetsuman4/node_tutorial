import express from "express";
import { userLogin, userSignUp } from "./controller.js";
import router from "./route.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.use("/user", router);

app.use(express.json());
app.post("/user", (req, res) => {
	const { name, email } = req.body;
	res.json({
		message: `User: ${name} with email: ${email} created successfully`,
	});
	console.log({
		message: `User: ${name} with email: ${email} created successfully`,
	});
});

app.put("/user/:id", (req, res) => {
	const userId = req.params.id;
	const { name, email } = req.body;
	res.json({
		message: `User ${userId} updated to ${name}, ${email}.`,
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
