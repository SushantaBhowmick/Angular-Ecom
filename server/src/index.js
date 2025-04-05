const express = require('express')
const cors = require('cors');
const userRoutes = require('./routes/userRotutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const adminProductRoutes = require('./routes/adminProductRoutes');
const cartRoutes = require('./routes/cartRoutes');
const cartItemRoutes = require('./routes/cartItemRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const adminOrderRoutes = require('./routes/adminOrderRoutes');

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
app.use("/api/products",productRoutes)
app.use("/api/admin/products",adminProductRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/cartItem",cartItemRoutes) 
app.use("/api/orders",orderRoutes)
app.use("/api/review",reviewRoutes)
app.use("/api/rating",ratingRoutes)
app.use("/api/admin/orders",adminOrderRoutes)


module.exports=app;