const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    title:String,
    body:String,
    device:String,
    no_of_comments:String
},{
    versionKey:false
})

const PostModel=mongoose.model('blacklist',blackListSchema)

module.exports={
    PostModel
}