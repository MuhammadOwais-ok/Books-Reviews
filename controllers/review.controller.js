const Book = require("../models/Book")
const Review = require("../models/Review")
const User = require("../models/User")




const addReview = async (request, response)=>{

try {
    const {ratings,review}= request.body
    const id = request.params.id
    const user = await User.findById(request.user.id)
    const book = await  Book.findById(id)

    if (!book) {
        return response.status(401).json({
            meesag:"Book Not Found"
        })
        
    }
    const reviewBook = new Review({
        ratings,
        review,
        
        bookId:book._id,
        userId:user._id
    })
     

    await reviewBook.save()

    
   
    

    return response.status(200).json({
        meesage:"Review added successfully",
        reviewBook
    })
    
    
} catch (error) {
    return response.status(501).json({
        messgae:"internal error",
        error:error.message
    })
    
}
 
}

const updateReview = async (request, response)=>{
    
    try {
        const id = request.params.id
        const {review,ratings}= request.body

        const user = await User.findById(request.user.id)
        const upR = await Review.findById(id)

        if (!upR) {
            return response.status(404).json({
                message:"Review Not Found"
            })
            
        }
        const updater = await Review.findOneAndUpdate(
            {review,ratings},
            {userId: user._id},
            {new: true}
        )

        return response.status(201).json({
            message:"Updated successfully",
            updater
        })


       
        
    } catch (error) {
        return response.status(501).json({
        messgae:"internal error",
        error:error.message
    })
    }



}






const delReview = (request ,response)=>{

}




const getAllReview = (request ,response)=>{

}






module.exports={
    addReview,
    updateReview,
    delReview,
    getAllReview
}