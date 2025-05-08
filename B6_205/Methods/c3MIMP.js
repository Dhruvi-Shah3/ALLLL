/*2.  You have been assigned to develop a user feedback form for a website using Express.js and cookies. 
Implement the following requirements:
•	Create a form with the following fields:
o	Name (input field)
o	Email (input field)
o	Message (textarea field)
o	Rating (radio buttons: Bad, Average, Good, Very Good, Excellent)
•	When the user submits the form, store their feedback information (name, email, message, and rating) in a cookie named "feedback" that expires in 10 seconds.
•	Display a confirmation messagek information from the cookie and display it on the page also include a link on the feedback details page to Logout.
•	When the user clicks the  to the user after successfully submitting the form & Create a link to display the feedback details stored in the "feedback" cookie. 
•   When the user click to the link, retrieve the feedbaclink, user redirected to home page.*/

const express=require("express");
var app=express();
const cp=require("cookie-parser")
app.use(cp())
app.use(express.static(__dirname,{index:"c3.html"}));
app.get("/submit",(req,res)=>{
    var{un,eid,msg,rating}=req.query
    var feedback={un,eid,msg,rating}
    res.cookie("feedback",feedback,
                {maxAge:1000})
    res.send(`<h1>Thank you</h1>
            <a href="/details">Details</a>`)
})
app.get("/details",(req,res)=>{
    var fb=req.cookies.feedback
    if(fb)
    {
        res.send(`<h1>Name:${fb.un}
                     Email:${fb.eid}
                     Message:${fb.msg}
                     rating:${fb.rating}</h1>`)
    }
    
    else{
        res.send('No feedback available')
    }
})
app.listen(8009)

