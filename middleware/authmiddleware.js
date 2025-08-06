const JWT = require("jsonwebtoken")



const authMiddleware = async (request, response,next)=>{
    try {
        const authHeader = request.headers.authorization
        if (!authHeader) {
            return response.status(401).json({
                message:"Token is required"
            })
            
        }
        const token = authHeader.split(" ")[1]
        const decoded = JWT.verify(token,process.env.JWT_SECRET_WEB_TOKEN)
        request.user = decoded
        next()
    
        
    } catch (error) {
        return response.status(500).json({
            message: " invalid Or Expires Token"
        })
       
        
    }
}

module.exports=authMiddleware
    
