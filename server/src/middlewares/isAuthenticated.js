const { findUserById } = require("../services/userService");
const { getUserIdFromToken } = require("../utils/jwtProvider");


exports.isAuthenticated = async(req, res, next) => {
    
    try {
        // Bearer token
        const token = req.headers.authorization?.split(" ")[1];
    
        if(!token){
            return res.status(401).json({
                success:false,
                msg:"Unauthorized",
                error:"Token not found"
            })
        }
        const userId = getUserIdFromToken(token);
        if(!userId){
            return res.status(401).json({
                success:false,
                msg:"Unauthorized",
                error:"Invalid token"
            })
        }
        const user = await findUserById(userId);
        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            msg: "Unhandled Unauthorized",
            error: error.message
        })   
    }
}