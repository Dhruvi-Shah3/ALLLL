// 1.	Write an express js script to set cookies of submitted values of form. Perform following tasks.
// •	Create a HTML file which contains a form with fields first name, last name, password and a submit button. 
// •	Once form submitted, store all these entered values to the respective cookies on ‘/next’ page. 
// •	Then redirect user to “/admin” page and clear the cookie set for the last name. 
//        Display remaining set cookie values on this page. (Using post method)

const express=require("express");
var app=express();
const cp=require("cookie-parser")
app.use(cp())
app.use(express.static(__dirname,{index:"c2.html"}));
app.get("/next",(req,res)=>{
    res.cookie("fname",req.query.fn)
    res.cookie("lname",req.query.ln)
    res.cookie("Password",req.query.pw)
    res.redirect("/admin")
})
app.get("/admin",(req,res)=>{
    res.clearCookie("lname")
    res.send(`Welcome${req.cookies.fname}  ${req.cookies.lname} Password is:${req.cookies.Password}`)
})
app.listen(7001)