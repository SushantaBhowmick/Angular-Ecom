const jwt = require("jsonwebtoken");
require("dotenv").config();
// const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
// const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1h';

// const jwtProvider = {
//     generateToken: (payload) => {
//         return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
//     },

//     verifyToken: (token) => {
//         try {
//             return jwt.verify(token, JWT_SECRET);
//         } catch (error) {
//             throw new Error('Invalid or expired token');
//         }
//     },

//     decodeToken: (token) => {
//         return jwt.decode(token);
//     },
// };

// module.exports = jwtProvider;


const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_SECRET_EXPIRE,
  });
  return token;
};

const getUserIdFromToken = (token) => {
  try {    
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decodedToken.userId;
  } catch (error) {
    throw new Error("Invalid token",error.message);  
  }
};

module.exports = {
  generateToken,
  getUserIdFromToken,
};
