// This file:

//Defines the structure (schema) of the data you want to store in MongoDB
//Creates a Model that you use to save and read data

const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
    {
        name : 
        {
            type : String,
            required : true,
        },
        imageUrl : 
        {
            type : String,
        },
        tags : 
        {
            type : String,
        },
        email : 
        {
            type : String,
        },
    }
)

const File = mongoose.model("File", fileSchema);
module.exports = File;