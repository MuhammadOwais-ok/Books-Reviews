const express = require("express")


const bookMiddleware = require("../middleware/book.middleware")
const adminMiddleware = require("../middleware/admin.middleware")
const { createBook, updateBook, deleteBook } = require("../controllers/book.controller")
const authMiddleware = require("../middleware/authmiddleware")



const router = express.Router()


router.post("/createBook", [authMiddleware, adminMiddleware], createBook)
router.put("/update/:id", [authMiddleware, adminMiddleware], updateBook)
router.delete("/delete/:id", [authMiddleware, adminMiddleware], deleteBook)








module.exports = router