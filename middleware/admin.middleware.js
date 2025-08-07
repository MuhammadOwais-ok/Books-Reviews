const User = require("../models/User")


const adminMiddleware = async (request,response,next)=>{
try {


        // const isAdmin = await User.find({
        //     role:"admin"

        // })
        

        if (request.user.role !== "admin" ) {

            return response.status(401).json({
                message:"Only admin can accesss this"
            })
        }
        
        next()
    
        
    } catch (error) {
        return response.status(500).json({
            message: " invalid Request"
        })
       
        
    }
}

module.exports = adminMiddleware