


const loginMiddleware = (request, response, next) => {

    try {
        const data = request.body
        const {email , password ,role} = data


        if (!data) {
            return response.status(401).json({
                message:"payload is required"
            })
            
        }

        if (!email) {
            return response.status(401).json({
                message: "email is required"
            })

        }
        if (!password) {
            return response.status(401).json({
                message: " password is reauired"
            })

        }
        next()
    } catch (error) {
        return response.status(501).json({
            meesage: "Internal error",
            error: error.meesage
        })

    }
}
module.exports = loginMiddleware