// Get Method
// 1.	Write express script to get form data using get method and display data in JSON format in next page named
//  “process_get”
// 2.	Write express js script to print message in next line splitting by “.” And use get method to submit the data.
//      HTML file contains form of text area for the message and submit button.
// 3.	Write express js script to perform tasks as asked below.
// A.	Create one HTML file which contains two number type input fields, one dropdown which contains 
//     options like (select, addition, subtraction, multiplication, division) and one submit button. 
// B.	The input fields must contain the value greater than 0 else it will give a message “Please enter the valid number”.
//      Also, user must select any of the formula from the dropdown else give a 
//      message “You have not selected any formula”. (Message will be displayed on “/calc” page.)
// C.	If one formula is selected and numbers are entered then respective calculations will be performed on 
//     the page “/calc”. 
// D.	Use get method to request data.

const express=require("express");
var app=express();
app.use(express.static(__dirname,{index:"p1.html"}));
app.use(express.urlencoded())
app.post("/data",(req,res)=>
{
    res.write(JSON.stringify(req.body));
    res.write(`welcome ${req.body.fn}${req.body.ln}`)
    res.send();
})
app.listen(5007)