const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwtProvider = require("../utils/jwtProvider");

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    let userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("user already exist with email:", email);
    }

    password = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const findUserById = async (id) => {
  try {
    const user = await User.findById(id).populate("address");

    if (!user) {
      throw new Error("user doesn't exists with Id:", id);
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("user doesn't exists with Email:", email);
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {    
    const userId = jwtProvider.getUserIdFromToken(token);
    if(!userId){
      return res.status(401).json({
          success:false,
          msg:"Unauthorized",
          error:"Invalid token"
      })
  }

    const user = await User.findById(userId);
    if (!user) {
      throw new Error("user doesn't exists:", email);
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const user = await User.find();
    if (!user.length) {
      throw new Error("No users found");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findUserById,
  findUserByEmail,
  getUserProfileByToken,
  getAllUsers,
};
