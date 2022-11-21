import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import "dotenv/config";

// const PORT = 4040;
const app = express();
app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => res.send("working"));

const client = new MongoClient(process.env.MONGO_URI);
const database = client.db("blog");
const posts = database.collection("posts");

client.connect();
console.log("\x1b[33m Connected to mongo! \x1b[0m");

// post - add one post item
// ---- author, date, text

app.post("/", async (req, res) => {
  //   const newPost = {
  //     author: "Jon",
  //     date: "2022-21-11",
  //     text: "lorem lorem here",
  //   };
  //   console.log("req.body ->", req.body);

  await posts.insertOne(req.body);

  res.send("Post was added :)");
});

// get - to get all posts
app.get("/", async (req, res) => {
  const allPosts = await posts.find().toArray();
  res.send(allPosts);
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on http://localhost:${process.env.PORT}...`)
);
