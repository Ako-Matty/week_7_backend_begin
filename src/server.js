//import express from "../node_modules/....."
const { response } = require("express");
const express = require("express");
const { request } = require("http");


const app = express();


// get

app.use(express.json());

app.get("/book", (request, response) => {
    // response.send("Hello from the book route!");
    const book = {
        title: "lord of the rings",
        author: "tolkein",
        genre: "fantasy",
    }


    const successResponse = {
        message: "response send succesfully",
        book: book,
    };

    response.send(successResponse);

});


// post

app.post("/book", (request, response) => {
    // console.log(request.body)
    // response.send("Hello from the post route!");



    const newBook = {
        id: Math.floor(Math.random() * 50),
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    };


    const successResponse = {
        message: "Successfullyt added to DB",
        newBook: newBook,
    };

    response.send(successResponse);

});


// put


app.put("/book", (request, response) => {
    // response.send ("hi from this put route")

    const morebook = {
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
        price: request.body.genre = 300,
    };

    const successResponse = {
        message: "You have updated this!",
        morebook: morebook,
    };

    response.send(successResponse);

});



// delete


app.delete("/book", (request, response) => {
    response.send("hi from this delete route")

    const deletebook = {
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
        price: request.body.genre = 300,
    }

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
