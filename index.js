const express=require("express")
const app=express()
const port=4000
const mongoose=require("mongoose")
const cors=require("cors")

const bodyparser=require("body-parser")
const Register=require("./registerSchema.js")
console.log(Register)
app.use(bodyparser.urlencoded({
	extended:true
}))
app.use(bodyparser.json())
app.use(cors())
mongoose.connect("mongodb+srv://Adinarayana123:Adi7780@cluster0.uzvyab9.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
	console.log("created mongodb database")
})
.catch((err)=>{
	console.log(err)
})
app.post("/Register",(req,res)=>{
	//const {username,password}=req.body
	const username="dummyusername",password="dummypassword"
	const newUser=new Register({
		username:username,
		password:password
	})
	newUser.save()
})
app.listen(port,()=>console.log("server is in port 4000"))