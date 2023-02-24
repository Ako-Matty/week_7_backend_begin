const { response } = require("express");
const Book= require("./model");


const getAllbooks = async (request, response) => {
    const allBooks = await Book.find({});

    console.log(allBooks);
    

    const successResponse = {
        message: "response send succesfully",
        book: allBooks,
    };

    response.send(successResponse);

};


const addBook = async (request, response) => {
    const newBook = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
});


console.log("newBook: ", newBook);

    const successResponse = {
        message: "Successfullyt added to DB",
        newBook: newBook,
    };


    response.send(successResponse);
};


const morebook = async (request, response) => {
    const filterObj = { title: request.body.title};
    const updateObj = { [request.body.updateKey]: request.body.updateValue};

    const morebook = await Book.updateOne (filterObj, updateObj)

    const successResponse = {
        message: "success",
        morebook: morebook, 
    };

    response.send(successResponse);
};


const deletebook = async (request, response) => {
    const deletedbook = await Book.deleteOne({ title: request.body.title});

    const successResponse = {
        message: "you deleted one book!",
        deletedbook: deletedbook,
    };

    response.send(successResponse);

};

const deletemanybooks = async (request, response) => {
    const deletedmanybooks = await Book.deleteMany({ genre: request.body.genre});

    const successResponse = {
        message:"You deleted others",
        deletedmanybooks: deletedmanybooks,
    };

    response.send(successResponse);

}






module.exports = {
    getAllbooks,
    addBook,
    morebook,
    deletebook,
    deletemanybooks
};
