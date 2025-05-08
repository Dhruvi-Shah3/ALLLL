const express=require("express");
var app=express();
app.use(express.static(__dirname,{index:"g3.html"}));
app.get("/calc",(req,res)=>
{
    res.set("content-type","text/html");
    var num1=parseInt(req.query.n1)
    var num2=parseInt(req.query.n2)
    var formula=req.query.formula
    if((num1>0)&&(num2>1))
    {
        if(formula=="add")
        {
            res.write(`addition is ${num1+num2}`)
        }
        else if(formula=="sub")
        {
            res.write(`subtraction is ${num1-num2}`)
        }
        else if(formula=="mul")
        {
            res.write(`subtraction is ${num1*num2}`)
        }
        else
        {
            res.write("Please select formula")
        }
        
    }
    else
    {
        res.write("Not valid number")
    }
    res.send();
})
app.listen(5001)