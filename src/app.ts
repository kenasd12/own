import express from "express";
import dotenv from "dotenv";
import { sum } from "./sum";
const app = express();

dotenv.config();

app.get("/", (req, res) => {
 const result = sum(2, 3);
 res.json({ message: "Hello World!!", result });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
 console.log(`Listening on port ${PORT}`);
});
