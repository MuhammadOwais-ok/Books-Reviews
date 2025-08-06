const mongoose = require("mongoose")




const userSchema = new mongoose.Schema({
    

    firstName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowerCase: true,
    },
    password:{
        type:String,
        required: true,

    },
    role:{
        type: String,
        Enumerator: ("admin,user"),
        default:"User"
    },
   
    createAt: {
        type:Date,
        Default: Date.now
        
    }
});


const User = mongoose.model("User", userSchema)
module.exports= User;
