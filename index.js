const express = require("express");
const app = express();
require("dotenv").config();

const fileUpload = require("express-fileupload");

// ✅ USE THIS ONLY ONCE
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

const port = process.env.port;

// DB connect
const dbConnect = require("./config/database");
dbConnect();

// Cloudinary connect
const cloudinaryConnect = require("./config/cloudenary");
cloudinaryConnect();

// body parser
app.use(express.json());

// routes
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

app.listen(port, () => {
  console.log("app is listening successfully at port:", port);
});