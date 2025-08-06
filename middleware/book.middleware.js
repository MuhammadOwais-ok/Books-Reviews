


const bookMiddleware = (request, response, next) => {
    try {


        const { title, auther } = request.body
        if (!title) {
            return response.status(400).json({
                message: "Title is required"
            })

        }
        if (!auther) {
            return response.status(400).json({
                message: "Auther is required"
            })

        }
        next()

    } catch (error) {
        return response(500).json({
            message: "internal Server Error",
            error: error.message
        })

    }
}




module.exports = bookMiddleware