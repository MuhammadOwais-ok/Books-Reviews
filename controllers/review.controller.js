const Book = require("../models/Book")
const Review = require("../models/Review")
const User = require("../models/User")


const addReview = async (request, response) => {

    try {
        const { ratings, review } = request.body
        const id = request.params.id

        const book = await Book.findById(id)
        console.log("🚀 ~ addReview ~ book:", book)


        if (!book) {
            return response.status(401).json({
                meesag: "Book Not Found"
            })

        }
        const alreadyreviewed = await Review.findOne(
            { bookId: id, userId: request.user.id }
        )
        console.log("🚀 ~ addReview ~ alreadyreviewed:", alreadyreviewed)
        if (alreadyreviewed) {
            return response.status(401).json({
                message: "cannot reviewed more then once"
            })
        }
        const reviewBook = new Review({
            ratings,
            review,

            bookId: book._id,
            userId: request.user.id
        })


        await reviewBook.save()

        return response.status(200).json({
            meesage: "Review added successfully",
            reviewBook
        })




    } catch (error) {

        return response.status(501).json({
            messgae: "internal error",
            error: error.message
        })

    }

}

const updateReview = async (request, response) => {

    try {
        const id = request.params.id
        const { review, ratings } = request.body


        const upR = await Review.findById(id)
        // const user = await User.findById(request.user.id)

        if (!upR) {
            return response.status(404).json({
                message: "Review Not Found"
            })

        }
        const updater = await Review.findOneAndUpdate(
            { userId: request.user.id },
            { review, ratings },
            { new: true }
        )

        return response.status(201).json({
            message: "Updated successfully",
            updater
        })

    } catch (error) {
        return response.status(501).json({
            messgae: "internal error",
            error: error.message
        })
    }



}

const delReview = async (request, response) => {
    try {
        const id = request.params.id

        const review = await Review.findById(id)

        if (!review) {
            return response.status(400).json({
                message: "review Not Found"
            })

        }
        const dlt = await Review.findOneAndDelete({ _id: id })


        return response.status(201).json({
            message: "Review Deleted Succssefully",
            dlt
        })
    } catch (error) {
        return response.status(501).json({
            messgae: "internal error",
            error: error.message
        })

    }


}

const getAllReview = async (request, response) => {
    try {

        const allR = await Review.find({
            userId: request.user.id
        })
            .populate("userId", "firstName")
            .populate("bookId", "title auther")


        return response.status(201).json({
            message: "All reviews",
            allR
        })



    } catch (error) {
        return response.status(501).json({
            messgae: "internal error",
            error: error.message
        })
    }

}






module.exports = {
    addReview,
    updateReview,
    delReview,
    getAllReview
}