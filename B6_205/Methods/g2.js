const express=require("express");
var app=express();
app.use(express.static(__dirname,{index:"g2.html"}));
app.get("/data",(req,res)=>
{
    res.set("content-type","text/html");
    var a=req.query.msg.split(".");
    for(i of a)
    {
        res.write(i+"<br>")
    }
    res.send();
})
app.listen(5001)