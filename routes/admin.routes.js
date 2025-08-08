const express = require("express")
const { getAllUser, getAllbooks, delUser, delBook } = require("../controllers/admin.controller")
const adminMiddleware = require("../middleware/admin.middleware")
const authMiddleware = require("../middleware/authmiddleware")



const router = express.Router()




router.get("/getAllUsers", [authMiddleware, adminMiddleware], getAllUser)
router.get("/getAllBooks", [authMiddleware, adminMiddleware], getAllbooks)
router.delete("deleteUsers/:id", [authMiddleware, adminMiddleware], delUser)
router.delete("/deleteBooks/:id", [authMiddleware, adminMiddleware], delBook)








module.exports = router