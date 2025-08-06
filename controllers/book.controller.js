const User = require("../models/User")
const Book = require("../models/Book")
const { default: mongoose } = require("mongoose")


const createBook = async (request, response) => {

    try {


        const { title, auther } = request.body

        const alreadyHaveBooks = await Book.findOne({
            title,
        })

        if (alreadyHaveBooks) {
            return response.status(401).json({
                message: "Books is already in Our Data Base"
            })

        }
        const newBook = new Book({
            title,
            auther,
            

        })
        const saveBook = await newBook.save()

        return response.status(201).json({
            message: "New Book has been Created",
            saveBook

        })

    } catch (error) {
        return response.status(500).json({
            message: "internal Server Error",
            error: error.message
        })

    }

}


const updateBook = async (request, response) => {
    try {
        const id = request.params.id
        const { title, auther } = request.body

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(400).json({
                message: "invallid id Format"
            })

        }

        const bk = await Book.findById(id)
        if (!bk) {
            return response.status(401).json({
                message: "No Book Found"
            })

        }
        const upDated = await Book.findOneAndUpdate(

            { _id: id },

            { title, auther },

            { new: true }


        )

        return response.status(201).json({ 
            message: "Updated Successfully",
            upDated
        })
        
        } catch (error) {
        return response.status(500).json({
            message: "internal Server Error",
            error: error.message
        })


    }

}


const deleteBook = async (request,response)=>{
    
    try {
        const id = request.params.id


        const dlt = await Book.findById(id)

        if (!dlt) {
            return response.status(400).json({
                message:"Book Not Found"
            })
            
        }


        const dt = await Book.findOneAndDelete({
            _id:id
        })

        return response.status(201).json({
            mesage:"deleted successfully",
            dt
        })


    } catch (error) {
        return response.status(500).json({
            message: "internal Server Error",
            error: error.message
        })

        
    }

}

module.exports = {
   createBook,
   updateBook,
   deleteBook
}



