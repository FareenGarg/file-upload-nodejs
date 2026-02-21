const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.port;
const dbConnect = require("./config/database");
dbConnect();

const cloudinaryConnect = require("./config/cloudenary");
cloudinaryConnect();

app.use(express.json());
const fileupload = require("express-fileupload");

app.use(fileupload());


const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);


app.listen(port,()=>
{
    console.log("app is listening sucessfully at port : ", port);
})
