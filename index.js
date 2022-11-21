import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import 'dotenv/config'

// const PORT = 4040;
const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => res.send("working"));

app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}...`));
