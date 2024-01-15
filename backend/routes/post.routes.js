const express=require('express')
const {PostModel}=require('../models/post.model')
const {auth}=require("../middlewares/auth.middleware")
const cors=require("cors")

const postRoute=express.Router()

postRoute.use(cors())
postRoute.get('/',auth,async(req,res)=>{
    const userId=req.user.id
    try{
        const post=await PostModel.find({user:userId},req.query);
        res.status(200).json({post_data:post})
    }catch(err){
        res.status(400).json({error:err})
    }
})



postRoute.post('/add',async(req,res)=>{
    const {title,body,device}=req.body;
    const no_of_comments=0;
    const userId=req.user.id
    try{
        const post=new PostModel({
            title,body,device,no_of_comments,user:userId
        })
        await post.save()
        res.status(200).json({msg:"New Post addded"})
    }catch(err){
        res.status(400).json({error:err})

    }
})

postRoute.get('/top',auth,async(req,res)=>{
    try{
        const userId=req.user.id;
        const page=req.query.page?parseInt(req.query.page):1;
        const limit=3;
        const posts=await PostModel.find({user:userId}).sort({no_of_comments:-1}).skip((page-1)*limit).limit(limit)
        res.status(200).json(posts)
    }catch(err){
        res.status(400).json({error:err})

    }
})



postRoute.patch('/update/:postID',auth,async(req,res)=>{
      const postId=req.params.postID
      try{
        await PostModel.findByIdAndUpdate({_id:postId})
        res.status(200).json({msg:"Post has been updated"})
      }catch(err){
        res.status(400).json({error:err})
        
      }
})
postRoute.delete('/delete/:postID',auth,async(req,res)=>{
    const postId=req.params.postID
    try{
      await PostModel.findByIdAndDelete({_id:postId})
      res.status(200).json({msg:"Post has been deleted"})
    }catch(err){
      res.status(400).json({error:err})
      
    }
})

module.exports={
    postRoute
}

