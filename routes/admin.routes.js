const express = require("express")
const { getAllUser, getAllbooks, delUser, delBook } = require("../controllers/admin.controller")
const adminMiddleware = require("../middleware/admin.middleware")



const router = express.Router()




router.get("/getAllUsers",adminMiddleware,getAllUser)
router.get("/getAllBooks",adminMiddleware,getAllbooks)
router.delete("deleteUsers/:id",adminMiddleware,delUser)
router.delete("/deleteBooks/:id",adminMiddleware,delBook)








module.exports = router