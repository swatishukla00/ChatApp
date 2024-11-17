import bcrypt from "bcryptjs";
import User from "../models/user.model.js"
import  generateTokenAndSetCookie from "../utils/generateJWT.js";

export const signup = async(req,res)=>{
   try {
    console.log(req.body)
    const{fullname,username,password,confirmpassword,gender} =req.body

    if(password !==confirmpassword){
        return res.status(400).json({error:"Password don't match"})
    }
    const user = await User.findOne({username});
    if(user){
        return res.status(400).json({error:"User allready exist"})
    }

//Hashpassword here
const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash(password,salt)

//Profilepic avatar
const boyprofilepic =`https://avatar.iran.liara.run/public/boy?username=${username}`;
const girlprofilepic =`https://avatar.iran.liara.run/public/girl?username=${username}`;

const newuser = new User({
    fullname,
    username,
    password:hashPassword,
    gender,
    profilepic: gender === "male" ? boyprofilepic : girlprofilepic
})
 if(newuser){
     //Genrate JWT token here
     generateTokenAndSetCookie(newuser._id,res)

    await newuser.save();
   
 res.status(201).json({
    _id:newuser._id,
    fullname:newuser.fullname,
    username:newuser.username,
    profilepic:newuser.profilepic

 })
 }
 else{
    res.status(400).json({error:"Invalid user data"})
 }

   } catch (error) {
    console.log("error in signup controller",error.message)
    res.status(500).json({error:"Internal server error"})
   }
}
export const login = async(req,res)=>{
    try {
        const{username,password }= req.body;
         const user = await User.findOne({username})
          const isPasswordcorrect = await bcrypt.compare(password,user?.password || "")
          if(!user || !isPasswordcorrect){
           return res.status(400).json({error:"Invailid cradentials"})
          }
          generateTokenAndSetCookie(user._id,res)

          res.status(200).json({
            _id:user._id,
            fullname:user.fullname,
            username:user.username,
            profilepic:user.profilepic
        
         })
        }
     catch (error) {
        console.log("error in login controller",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
export const logout =(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        console.log("error in login controller",error.message)
        res.status(500).json({error:"Internal server error"})
    }
    }

