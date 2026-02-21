const mongoose = require("mongoose");

require("dotenv").config();
const url = process.env.database_url;

const dbConnect = ()=>
{
    mongoose.connect(url)
    .then(()=>
    {
        console.log("database has been connected sucessfully");
    })
    .catch((err)=>
    {
        console.log("database is not connected properly");
        console.log(err);
        process.exit(1);
    })
}

module.exports = dbConnect;