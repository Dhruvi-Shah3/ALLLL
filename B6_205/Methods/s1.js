// 1.	Write express js script using session to display how many times a user visited a website. If user is visiting a 
// website for the first time then display “Welcome! Thank you for visiting our website!” else display the count of user
//  (How many times) for that particular session. 
const express=require("express");
var app=express();
const es=require("express-session")
app.use(es({secret:"LJU123"}))
app.get("/test",(req,res)=>{
    if (req.session.page_views)
    {
        req.session.page_views++
        res.send(`<h1 style="color:red">You have visited ${req.session.page_views}times</h1>`)
    }
    else
    {
        req.session.page_views=1
        res.send(`<h1 style="color:blue">Thank You for visiting</h1>`)
    }
})
app.listen(7001)