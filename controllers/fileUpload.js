const File = require("../models/File");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
// local file upload will upload the file given by the user on a temporary storage at server
// take the data from client's PC and will store at a server's path(given by the user)

exports.localFileUpload = async(req,res)=>
{
    try
    {
// fetch the file
const file = req.files.file;
console.log(file);

// now at which path we need to store the file at server
let path = __dirname + "/files" + Date.now() + "." + file.name.split('.')[1];
console.log("your path is ", path);
file.mv(path, (err)=>
{
    console.log(err);

});

res.json({
    success : true,
    message : "your file has been saved successfully",
});


    }
    catch(err)
    {
console.log(err);
    }
};

async function uploadFileToCloudinary(file, folder)
{
    const options = { folder };
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}


// we will be writing the handler to upload the image on cloudinary
// simultaneously we will also be storing it's entry into the mongo database
exports.imageUpload = async(req,res)=>
{
    try
    {
        // fetching all the initial data from request's body
       const {name, tags, email} = req.body;
       console.log(name,tags,email);
        
       // fetching the file from request's body
       const file = req.files.imageFile;
       console.log(file);


       // validation
       const supportedTypes = ["jpg", "jpeg", "png"];
       const fileType = file.name.split('.')[1].toLowerCase();

       if(!(supportedTypes.includes(fileType)))
       {
        return res.status(400).json({
            success : false,
            message : "File format is not supported",
        })
       }

       // if the file format is supported
       // now we will be uploading the file on cloudinary

       const response = await uploadFileToCloudinary(file, "fileUploads");
       console.log(response);

       // save the entry into the database
       
res.status(200).json({
    success : true,
    message : "image has been uploaded successfully",
})
    }
    catch(err)
    {
        console.log(err);
res.status(500).json(
    {
        success : false,
        message : "something has went wrong , please try again later !",
    }
)
    }
}
