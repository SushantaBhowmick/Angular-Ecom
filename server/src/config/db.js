const mongoose = require('mongoose')

exports.connectDB=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((data)=>{
        console.log(`Mongodb connected with server:${data.connection.host}`);
    }).catch((err)=>{
        console.log('Db connection error: ',err)
    })
}