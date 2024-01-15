const jwt=require('jsonwebtoken')
const {BlackListModel}=require("../models/blacklist.model")


const auth=async(req,res,next)=>{
    const token=res.headers.authorization.split(" ")[1]
    const blacktoken=await token.BlackListModel.findOne({access_token:token})
    if(token){
        if(blacktoken){
            return res.json({msg:"You have been logged out"})
        }
        try{
            const decode=jwt.verify(token,"masai");
            next()
        }catch(err){
            res.json({error:err})
        }
    }
}
module.exports={
    auth
}