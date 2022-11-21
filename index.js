import express from "express";
import cors from "cors";
import "dotenv/config";

import { posts } from "./mongoConnect.js";
import { addPost } from "./src/posts.js";


const app = express();
app.use(cors());
app.use(express.json());


app.post("/", addPost);
app.get("/", async (req, res) => {
  const allPosts = await posts.find().toArray();
  res.send(allPosts);
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on http://localhost:${process.env.PORT}...`)
);
