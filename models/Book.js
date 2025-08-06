const mongoose = require ("mongoose")


const booksSchema = new mongoose.Schema({



    title:{
        type: String,
        required: true,
        trim: true
    },
    auther:{
        type:String,
        required: true,
        trim: true
    },
    adminId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

})

const Book = mongoose.model("Book", booksSchema)

module.exports= Book