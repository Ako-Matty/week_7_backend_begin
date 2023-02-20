//import express from "../node_modules/....."
const express = require("express");


const app = express();

app.use("/", express.static("books"));
app.use("/books", express.static("books"));
// app.use("/about", express.static("books"));
// app.use("/Games", express.static("Games"));


app.listen(5001, () => console.log("Server is listening on port 5001"));