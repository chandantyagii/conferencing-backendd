 

const mongoose = require("mongoose");


async function connectDb()  {

    try{

        await mongoose.connect(process.env.MONGO_URI );

        console.log("db connected successfully " +" server/config/db.js" );
    }catch(err)
    {
        console.log("we got error while connecting db in" + "server/config/db.js" +err);

        process.exit(1);
    }

}




module.exports =connectDb;

