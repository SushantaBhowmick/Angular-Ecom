const { createProduct, deleteProduct, updateProduct, findProductById, getAllProducts, createMultipleProducts } = require("../services/productService");


exports.createProduct = async(req,res)=>{
    try {
        const product = await createProduct(req.body);
        return res.status(201).json({
            success:true,
            msg:"Product created successfully!",
            product
        })
    } catch (error) {
       return res.status(500).json({
            success:false,
            msg:"Internal server error",
            error:error.message
        })
    }
}

exports.deleteProduct = async(req,res)=>{
    const {id} = req.params;
    if(!id){
        return res.status(400).json({
            success:false,
            msg:"Product id is required!"
        })
    }
    try {
        await deleteProduct(id);
        return res.status(200).json({
            success:true,
            msg:"Product deleted successfully!",
        })
    } catch (error) {
       return res.status(500).json({
            success:false,
            msg:"Internal server error",
            error:error.message
        })
    }
}

exports.updateProduct = async(req,res)=>{
    const {id} = req.params;
    if(!id){
        return res.status(400).json({
            success:false,
            msg:"Product id is required!"
        })
    }
    try {
        const product = await updateProduct(id,req.body);
        return res.status(200).json({
            success:true,
            msg:"Product updated successfully!",
            product
        })
    } catch (error) {
       return res.status(500).json({
            success:false,
            msg:"Internal server error",
            error:error.message
        })
    }
}

exports.findProductById = async(req,res)=>{
    const {id} = req.params;
    if(!id){
        return res.status(400).json({
            success:false,
            msg:"Product id is required!"
        })
    }
    try {
        const product = await findProductById(id);
        return res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
       return res.status(500).json({
            success:false,
            msg:"Internal server error",
            error:error.message
        })
    }
}

exports.getAllProducts = async(req,res)=>{
  
    try {
        const products = await getAllProducts(req.query);
        return res.status(200).json({
            success:true,
            products
        })
    } catch (error) {
       return res.status(500).json({
            success:false,
            msg:"Internal server error",
            error:error.message
        })
    }
}

exports.createMultipleProduct = async(req,res)=>{
  
    try {
        const products = await createMultipleProducts(req.body);
        return res.status(200).json({
            success:true,
            msg:"Products created successfully!",
            products
        })
    } catch (error) {
       return res.status(500).json({
            success:false,
            msg:"Internal server error",
            error:error.message
        })
    }
}
