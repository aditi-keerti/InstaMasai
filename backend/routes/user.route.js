const express= require('express')
const {UserModel}=require('../models/user.model')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const {BlackListModel}=require('../models/blacklist.model')

const userRoute=express.Router()
userRoute.post('/register',async(req,res)=>{
    const {name,email,gender,password,age,city}=req.body
    const ExistUser=await UserModel.findOne({email})
    if(ExistUser){
     return res.status(200).json({msg:"User already exist, please login"})
    }
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
           if(err){
            return res.status(401).json({error:err})
           }
           const user= new UserModel({name,email,gender,password:hash,age,city})
           await user.save()
           res.status(200).json({msg:"New user has been registered",new_user:user})
        })
    }catch(err){
        res.status(400).json({error:err})
    }
})

userRoute.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const user=await UserModel.findOne({email})
    try{
        if(user){
        bcrypt.compare(password,user.password,(err,decoded)=>{
            if(decoded){
                const access_token=jwt.sign({name:"aditi"},"masai")
                res.status(200).json({msg:"Login Successfull",access_token})
            }else{
                res.status(200).json({msg:"Wrong password,Try Again!!"})
            }
        })}else{
            res.status(200).json({msg:"No user found, Please register"})
        }
    }catch(err){
        res.status(400).json({error:err})
    }
})

userRoute.post('/logout',async(req,res)=>{
    const access_token=req.headers.authorization?.split(" ")[1]
    try{
        const token=new BlackListModel({access_token})
        await token.save()
        res.status(200).json({msg:"Logout successfull!!"})
    }catch(err){
        res.status(400).json({error:err})
    }
})

module.exports={
    userRoute
}


