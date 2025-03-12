import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		age: { type: Number, required: true },
		userOrder: {
			type: Object,
			default: {
				test: "test1",
			},
		},
	},
	{ timestamps: true, minimize: false } // minimize: false is used to store empty objects
);

export const Person = mongoose.model("Person", personSchema);
