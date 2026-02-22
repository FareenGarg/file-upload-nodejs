const File = require("../models/File");


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
