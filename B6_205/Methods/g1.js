const express=require("express");
var app=express();
app.use(express.static(__dirname,{index:"g1.html"}));
app.get("/process_get",(req,res)=>
{
    res.write(JSON.stringify(req.query));
    res.write("<h1>"+req.query.un+"</h1>")
    var res1={uname:req.query.un,
            email:req.query.eid}
    res.write(res1.uname+" "+res1.email)
    res.send();
})
app.listen(7001)