const express = require('express');
const path = require('path')
const router = express.Router();

const products=[];

// /admin/add-user => GET Request
router.get('/add-user',(req,res,next)=>{
    // res.send('<form action="/admin/add-user" method="POST"><input type="text" name="name" placeholder="Enter name"><br><br><button type="submit">Add UserName</button></form>')
    res.sendFile(path.join(__dirname,'..','views','add-user.html'));
});



// /admin/add-user => POST Request
router.post('/add-user',(req,res,next)=>{
    console.log(req.body.name);
    products.push({name:req.body.name});
    res.redirect("/");
});


// router.use('/users',(req,res,next)=>{
//     console.log("Users in express");
//     res.send("<ul><li>Vasanth</li>");
//     res.send("<li>Sony</li>");
//     res.send("<li>Jesus</li></ul>")
//     // next();
// });
// 

exports.routes=router;

exports.products=products;