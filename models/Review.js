const mongoose = require("mongoose")




const reviewSchema = new mongoose.Schema({


   
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
    },
    review:{
        type: String,
        required:true,
        trim: true

    },
    ratings: {
        type: Number,
        trim: true,
        min: 1,
        max: 5
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});




const Review = mongoose.model("Review", reviewSchema)

module.exports = Review;