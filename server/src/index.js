const express = require('express')
const cors = require('cors');
const userRoutes = require('./routes/userRotutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();


const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"Welcome to my commerce server",
        success:true,
    })
})


// Routes
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)

module.exports=app;