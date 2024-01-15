const mongoose=require('mongoose');

const blackListSchema=mongoose.Schema({
    access_token:String,
    name:String,
    email:String
},{
    versionKey:false
})

const BlackListModel=mongoose.model('blacklist',blackListSchema)

module.exports={
    BlackListModel
}