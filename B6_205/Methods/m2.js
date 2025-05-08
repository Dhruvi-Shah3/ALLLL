// 1.	Write express js script to perform following tasks.
// I.	Create one html file which contains one text field for name, email field and checkbox for subscription.
//       Html file will be loaded on home page. Email and name fields are required fields.
// II.	On login page welcome user and email id data should be printed.
//      a.	If user checked the subscription then “Thank you for the subscription” message will be printed and 
//          “logout” link will be displayed under the message. If user clicks logout link then he/she will be
//           redirected to the home page.
//      b.	If user has not opted for the subscription then “You can subscribe to get daily updates” message will
//          be printed and “subscribe” link will be displayed under the message. If user clicks subscribe link then 
//          he/she will be redirected to the subscription page. In this page “Thank you for the subscription” message
//          will be printed and “logout” link will be displayed under the message. If user clicks logout link then
//          he/she will be redirected to the home page.
// Use concept of the middleware and you can use any of http methods(get/post).

const express=require("express");
var app=express();
app.use(express.static(__dirname,{index:"m2.html"}));
app.use(express.urlencoded())
app.post("/login",(req,res,next)=>{
    res.set("content-type","text/html")
    res.write(`<h1>Welcome ${req.body.un}</h1>
                <h1>Email Id:${req.body.eid}</h1>`)
    next();
})
app.post("/login",(req,res)=>{
    if(req.body.subscribe=="on")
    {
        res.write(`<h3>Thank You</h3>
                    <a href="/">Logout</a>`)
    }
    else
    {
        res.write(`<h3>You can Subscribe</h3>
                     <a href="/subscribe">Subscribe</a>`)
    }
    res.send()
})
app.get("/subscribe",(req,res)=>
{
    res.send(`<h3>Thank You</h3>
                <a href="/">Logout</a>`)
})
app.listen(5008)