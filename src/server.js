require("dotenv").config();
require("./db/connection")
// console.log(process.env.MY_SUPER_SECRET);
//import express from "../node_modules/....."
const { response } = require("express");
const express = require("express");

const port = process.env.PORT || 5001; 
const { request } = require("http");


const Book = require("./books/model");

const app = express();


// get

app.use(express.json());

app.get("/books/getallbooks", async (request, response) => {
    console.log(request);
    const allBooks = await Book.find({});

    console.log(allBooks);
    

    const successResponse = {
        message: "response send succesfully",
        book: allBooks,
    };

    response.send(successResponse);

});


// post

app.post("/books/addbooks", async (request, response) => {
    console.log(request.body);
    // response.send("Hello from the post route!");

    const newBook = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });



    const successResponse = {
        message: "Successfullyt added to DB",
        newBook: newBook,
    };

    response.send(successResponse);
    // response.send(successMessage);

});


// put


app.put("/books/updatebook", async (request, response) => {
    // response.send ("hi from this put route")

    const morebook = await Book.updateOne (
        { "title": "lord of the rings 1"}, { "title": "Matilda 2"}
        );

    const successResponse = {
        message: "You have updated this!",
        morebook: morebook,
    };

    response.send(successResponse);

});



// delete


app.delete("/book/deletebook", async (request, response) => {
    // response.send("hi from this delete route")

    const deletebook = await Book.deleteOne ({
        title: "matilda 1"
    })

    const successResponse = {
        message: "you have deleted this",
        deletebook: deletebook,
    };

    response.send(successResponse);


})




// app.use("/", express.static("books"));
// app.use("/books", express.static("books"));
// app.use("/about", express.static("books"));
// app.use("/Games", express.static("Games"));


app.get("/game/awesomegame/greatgame/spyro", (request, response) => {
    response.send("Helo from the Game route");
})

app.listen(5001, () => console.log("Server is listening on port 5001"));
