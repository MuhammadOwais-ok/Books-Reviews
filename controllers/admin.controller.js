const User = require("../models/User")
const Books = require("../models/Book")




const getAllbooks = async (request, response) => {
    try {


        const { query } = request;
        const page = +query.page || 1;
        const limit = +query.limit || 5
        const searchValue = query.searchValue
        const skip = (page - 1) * limit


        const serachQuery = {}
        if (searchValue) {
            serachQuery.$or = [
                { title: { $regex: searchValue, $options: "i" } },
                { auther: { $regex: searchValue, $options: "i" } },
            ]

        }

        const kitab = await Books.find(serachQuery)
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })

        const totalBooks = await Books.countDocuments(serachQuery)


        return response.status(201).json({
            message: "All books",
            totalPages: Math.ceil(totalBooks / limit),
            kitab,
            totalBooks
        })

    } catch (error) {
        console.log("🚀 ~ getAllbooks ~ error:", error)
        return response.status(501).json({
            merrgae: "invalid request",
            error: error.message
        })

    }

}

const getAllUser = async (request, response) => {
    try {
        const { query } = request.query
        const page = +query.page || 1
        const limit = +query.limit || 5
        const searchValue = query.searchValue
        const skip = (page - 1) * limit


        const serachQuery = {
            role: "user"

        }
        if (serachQuery) {
            serachQuery.$or = [
                { firstName: { $regex: searchValue, $options: "i" } },
                { lastName: { $regex: searchValue, $options: "i" } },
                { email: { $regex: searchValue, $options: "i" } },
            ]

        }

        const user = await User.find(serachQuery)
            .skip(skip)
            .limit(limit)

        const totalUsers = await User.countDocuments(serachQuery)


        return response.status(201).json({
            message: "All Users",
            totalPages: Math.ceil(totalUsers / limit),
            user,
            totalUsers
        })

    } catch (error) {
        console.log("🚀 ~ getAllUser ~ error:", error)
        return response.status(501).json({
            merrgae: "invalid request",
            error: error.message
        })
    }

}


const delUser = async (request, response) => {
    try {
        const id = request.params.id

        const user = await User.findById({ _id: id, role: "user" })

        if (!user) {
            return response.status(404).json({
                mesasge: "User Not Found"
            })

        }

        await User.findOneAndDelete(user.id)

        return response.status(201).json({
            message: "User delete succssefully",

        })
    } catch (error) {
        return response.status(501).json({
            merrgae: "invalid request",
            error: error.message
        })
    }
}

const delBook = async (request, response) => {
    try {
        const id = request.params.id

        const book = await Books.findById(id)

        if (!book) {
            return response.status(404).json({
                mesasge: "Book Not Found"
            })

        }
        await Books.findOneAndDelete({ _id: id })

        return response.status(201).json({
            message: "Book delete succssefully",
        })
    } catch (error) {
        return response.status(501).json({
            merrgae: "invalid request",
            error: error.message
        })
    }
}
module.exports = { getAllbooks, getAllUser, delUser, delBook }