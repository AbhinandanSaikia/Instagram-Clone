import User from "../Model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        if(!username || !email || !password){
            return res.status(401).json({
                message:"Somthing is missing, Please Check!",
                sucess:false,
            });
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"User already exists",
                sucess:false,
            });
        };
        const hashedPassword = await bcrypt.hash(password,10);

        await User.create({username, email, password: hashedPassword});   
        return res.status(201).json({
                message:"Account created successfully",
                sucess:true,
            });
        }
    } catch (error) {
        console.log(error);
    }
}
export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(401).json({message:"Somthing is missing, Please Check!",sucess:false,});
        }
        let user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message:"Incorret Email or Password",sucess:false,});
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(401).json({message:"Incorret Email or Password",sucess:false,});
        };

        user = {
            _id: user._id,
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture,
            bio: user.bio,
            followers: user.followers,
            following: user.following,
            posts: user.posts,
        }

        const token = await jwt.sign({id:user._id}, process.env.SECRET_KEY, {expiresIn:"1d"});
        return res.cookie("token", token, {httpOnly:true, sameSite:'strict', maxAge: 1*24*60*60*1000,}).json({
            message:`Welcome back, ${user.username}`,
            sucess:true,
            user
        });


    } catch (error) {
        console.log(error);
        
    }
};

export const logout = async (req, res) => {
    try {
        return res.cookie("token", "", {maxAge: 0,}).json({
            message:"Logout Successfull",
            sucess:true,
        });
    } catch (error) {
        console.log(error);
    }
};
export const getMyProfile = async (req, res) => {
    try {
        const userID = req.params.id;
        let user = await User.findById(userID);
        return res.status(200).json({
            sucess:true,
            user,
        });

    } catch (error) {
        console.log(error);
        
    }
};

export const editProfile = async (req, res) => {
    try {
      const userID = req.id;

      /// start from here

        
    } catch (error) {
        console.log(error);
    }
}