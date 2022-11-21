import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import 'dotenv/config'

// const PORT = 4040;
const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => res.send("working"));

const client = new MongoClient(process.env.MONGO_URI)
const database = client.db('blog')
const posts = database.collection('posts')

client.connect()
console.log('\x1b[33m Connected to mongo! \x1b[0m')

app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}...`));
