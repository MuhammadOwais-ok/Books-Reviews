const User = require("../models/User")
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")



const signUp = async (request, response) => {
    try {
        const { firstName, lastName, email, password  } = request.body

        const isalreadyInOurDataBase = await User.findOne({
            email,
            

        })
        if (isalreadyInOurDataBase) {
            return response.status(401).json({
                message: "User is Already in Our Data Base"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashPassword

        })
        await newUser.save()

        const token = JWT.sign(
            { id: newUser._id, email: newUser.email },
            process.env.JWT_SECRET_WEB_TOKEN,
            { expiresIn: "1d" }
        )
        return response.status(201).json({
            message: "SignUp successfully",
            newUser,
            token
        })

    } catch (error) {
        return response.status(501).json({
            message: "invalid request  ",
            error: error.message
        })
    }
}


const login = async (request, response) => {
    try {

        const { email, password } = request.body


        const user = await User.findOne({
            email
        })


        if (!user) {
            return response.status(404).json({
                message: "User Not Found"
            })

        }
        const token = JWT.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET_WEB_TOKEN,
            { expiresIn: "1d" })


        const isPasswordIsCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordIsCorrect) {
            return response.status(401).json({
                message: "Invalid Credential"
            })

        }

        return response.status(201).json({
            message: " Login Successfully",
            user,
            token
        })


    } catch (error) {
        return response.status(501).json({
            message: "Invalid Request"
        })

    }
}




module.exports = {
    signUp,
    login
}
