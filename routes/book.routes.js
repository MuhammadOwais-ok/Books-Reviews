const express = require("express")


const bookMiddleware = require("../middleware/book.middleware")
const adminMiddleware = require("../middleware/admin.middleware")
const { createBook, updateBook, deleteBook } = require("../controllers/book.controller")



const router = express.Router()


router.post("/createBook", createBook)
router.put("/update/:id",updateBook)
router.delete("/delete/:id",deleteBook)








module.exports=router