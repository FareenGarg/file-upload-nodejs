
// This file’s only job is:
//Tell Cloudinary who you are and allow your server to upload files

//Import Cloudinary SDK (v2)
const cloudinary = require("cloudinary").v2;

require("dotenv").config();
const cloudinaryConnect = ()=>
{
   try{
     cloudinary.config(
        {
            cloud_name : process.env.CLOUD_NAME,
            api_key : process.env.API_KEY,
            api_secret : process.env.API_SECRET,
        }
    )
   }
   catch(err)
   {
      console.log(error);
   }
}

// exporting the cloudinary function
module.exports = cloudinaryConnect;