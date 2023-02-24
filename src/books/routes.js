const { Router } = require("express");
const bookRouter = Router();

const { getAllbooks, addBook, morebook, deletebook, deletemanybooks } = require("./controllers")

bookRouter.get("/books/getallbook", getAllbooks);
bookRouter.post("/books/addbooks", addBook);
bookRouter.put("/books/updatebook", morebook);
bookRouter.delete("/book/deletebook", deletebook)
bookRouter.delete("/book/deletemanybooks", deletemanybooks)

module.exports = bookRouter;