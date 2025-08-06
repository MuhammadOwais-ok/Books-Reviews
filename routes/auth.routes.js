const express = require("express")
const signUpmiddleware = require("../middleware/signUp.middleware")

const loginMiddleware = require("../middleware/login.middleware")
const { signUp, login } = require("../controllers/auth.controller")


const router = express.Router()






router.post("/signUp",signUpmiddleware,signUp)
router.post("/login",loginMiddleware,login)











module.exports=router







