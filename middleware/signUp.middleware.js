

const signUpmiddleware = (request,response,next) => {
    try {
        const data = request.body

        if (!data) {
            return response.status(400).json({
                messasge: "payload is required"
            })

        }

        const { firstName,lastName,email,password,role} = data

        if (!firstName) {
            return response.status(401).json({
                message: " First Name is required "
            })
        }
        if (!lastName) {
            return response.status(401).json({
                message: " last Name is required "
            })
        }
        if (!email) {
            return response.status(401).json({
                message: " Email is required "
            })
        }
        if (!password) {
            return response.status(401).json({
                message: " Password is required "
            })
        }
        

        next()

    } catch (error) {
        return response.status(500).json({

           meesage: "invalid request why",
           error:error.message
        })

    }
}


module.exports = signUpmiddleware
