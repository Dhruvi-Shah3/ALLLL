//MIDDLEWARE
//#rd parameter add=NEXT

const express=require("express")
const app=express();
const fun1=(req,res,next)=>{

   //  res.set("content-type","text/html")
    res.write("<h1>test</h1>")
    next();
}
const fun2=(req,res,next)=>{
    res.write("<h3>Hello<h3>")
}
app.use("/test",fun1,fun2)

app.get("/test",(req,res)=>
{
    res.write("Testting");
    res.send()
}
)
app.listen(5007
    
)

//output
//localhost:5001/test
// test
// Hello