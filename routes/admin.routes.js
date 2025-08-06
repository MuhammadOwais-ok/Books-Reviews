const express = require("express")
const getAllbooks = require("../controllers/admin.controller")


const router = express.Router()




router.get("/getAll",getAllbooks)







module.exports = router