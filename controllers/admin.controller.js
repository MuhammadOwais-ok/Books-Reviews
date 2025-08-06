const User = require("../models/User")
const Books = require("../models/Book")




const getAllbooks= async(request,response) =>{
    try {
    
        const kitab = await Books.find()


        return response.status(201).json({
            message: "All books",
            kitab
        })

    } catch (error) {
        
    }
}


module.exports = getAllbooks