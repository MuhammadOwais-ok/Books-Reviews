const express = require("express")
const { addReview, updateReview, delReview, getAllReview } = require("../controllers/review.controller")
const authMiddleware = require("../middleware/authmiddleware")

const router = express.Router()





router.post("/addReview/:id", authMiddleware, addReview)
router.put("/update/:id", authMiddleware, updateReview)
router.delete("/delete/:id", authMiddleware, delReview)
router.get("/allReview", authMiddleware, getAllReview)









module.exports = router