import express from "express";
import { connectDataBase } from "./config/db.js";
import { Person } from "./models/Person.js";

const app = express();
app.use(express.json());

const PORT = 9000;
await connectDataBase;

app.get("/", async (req, res) => {
	res.send(`Hello Express`);
});

// Creating data to be stored in the database
app.post("/person", async (req, res) => {
	try {
		const { email, name, age } = req.body;
		const newPerson = new Person({
			name: name,
			email: email,
			age: age,
		});
		await newPerson.save();
		res.send("Person Added");
	} catch (error) {
		console.log("Error Encounterd while creating user: ", error.message);
		res.send(error.message);
	}
});

// Updating data to be stored in the database
app.put("/person", async (req, res) => {
	const { email, id, name } = req.body;

	const personData = await Person.findByIdAndUpdate(id, {
		name: name,
		email: email,
	});

	console.log(`Person Details with email : ${email}  => ${personData}`);
	res.send(`Person Details with email : ${email}  => ${personData}`);
});
// Deleting data to be stored in the database
app.delete("/person", async (req, res) => {
	const { id } = req.body;
	await Person.findByIdAndDelete(id);
	res.send(`Person with id : ${id} is deleted
  `);
	console.log(`Person with id : ${id} is deleted`);
});

app.listen(PORT, () => {
	console.log(`Server is running on port 🚩🚩 ${PORT}`);
});
