const User = require("../models/User")


const adminMiddleware = async (request,response,next)=>{
try {
        const isAdmin = await User.find({
            role:"admin"

        })
        

        if (request.user.role !== isAdmin ) {

            return response.status(401).json({
                message:"Only admin can accesss this"
            })
        }
        
        next()
    
        
    } catch (error) {
        return response.status(500).json({
            message: " invalid Or Expires Token"
        })
       
        
    }
}

module.exports = adminMiddleware