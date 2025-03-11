import express from "express";
import multer from "multer";

const app = express();
app.use(express.json());

// Create a storage object with a given configuration
const storage = multer.diskStorage({
	destination: "upload",
	filename: (req, file, cb) => {
		cb(null, file.fieldname + Date.now() + file.originalname);
	},
});
const upload = multer({ storage: storage, limits: { fileSize: 120040 } });
const PORT = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(upload.single("file"));

app.get("/", (req, res) => {
	res.send(`Hello Express`);
});

app.post("/form", (req, res) => {
	console.log(req.body);
	console.log(req.file);
	res.send("Form submitted successfully");
});

app.listen(PORT, () => {
	console.log(`Server is running on port 🚩🚩 ${PORT}`);
});
