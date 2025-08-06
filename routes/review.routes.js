const express = require("express")
const { addReview, updateReview } = require("../controllers/review.controller")
const authMiddleware = require("../middleware/authmiddleware")

const router = express.Router()





router.post("/addReview/:id",authMiddleware, addReview)
router.put("/update/:id",updateReview)









module.exports = router