require("dotenv").config();
require("./db/connection")
console.log(process.env.MY_SUPER_SECRET);
// import express from "../node_modules/....."
// const { response } = require("express");
const express = require("express");

const port = process.env.PORT || 5001; 

// const { request } = require("http");


const Book = require("./books/model");

const bookRouter = require("./books/routes");

const app = express();




app.use(express.json());


app.use(bookRouter);
// app.use(authorRouter);
// app.use(userRouter);








// app.




// app.use("/", express.static("books"));
// app.use("/books", express.static("books"));
// app.use("/about", express.static("books"));
// app.use("/Games", express.static("Games"));


app.get("/game/awesomegame/greatgame/spyro", (request, response) => {
    response.send("Helo from the Game route");
})

app.listen(5001, () => console.log("Server is listening on port 5001"));
