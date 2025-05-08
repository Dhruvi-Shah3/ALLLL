/*3.	write a script to meet following requirements:
a.	Create session.html file page which contains form(username,password,login button). and open it on localhost.
b.	After clicking submit button, it should jump on “save” page. Store username and password in session.
c.	After saving session, redirect to “fetchdata” page and read value. On this page check authentication of user. User name and password must be “admin” and “admin@123” respectively. 
i.	If this condition is true then display welcome admin and display logout link on this page(fetchdata).
1.	By clicking on logout link user should jump to “destroy” page and destroy the session there and display the message “Session destroyed”.  And give the link of “login” under that message. By clicking that link user will be redirected to the home page. 
ii.	Else display “Please enter valid username and password” and login link on this page(fetchdata).*/


const express=require("express");
var app=express();
const es=require("express-session")
app.use(es({secret:"LJU123"}))
app.use(express.static(__dirname,{index:"s2.html"}));
app.get("/save",(req,res)=>{
   req.session.uname=req.query.un;
   req.session.pass=req.query.pw;
   req.redirect("fetchdata")
})
app.get("/fetchdata",(req,res)=>{
    if(req.session.uname=="admin" && req.session.pass=="admin@!123")
    res.send(`<h1>Welcome admin</h1>
            <a href="/destroy">Logout</a>`)
    
})
app.get("/destroy",(req,res)=>{
    req.session.destroy()
    res.send(`<h1>Session destroyed</h1>
    <a href="/">Login</a>`)
    res.redirect("/")
})
app.listen(7009)