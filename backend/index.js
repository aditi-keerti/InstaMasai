const express= require("express")
const {connection}=require('./db')
const {userRoute}=require('./routes/user.route')
const {postRoute}=require('./routes/post.routes')
const cors=require('cors')

const app=express()
app.use(cors({
    origin:'http://127.0.0.1:5500',
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
    optionsSuccessStatus:204

}))


app.use(express.json())
app.get('/',(req,res)=>{
    res.json({mesg:"this is home page"})
})
app.use('/users',userRoute)
app.use('/posts',postRoute)

app.listen(8080,async()=>{
    try{
        await connection
        console.log("connected to DB")
        console.log("Server is running at 8080")
    }catch(err){
        console.log(err)
    }
})
