const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

const userData = require('./admin')

router.get('/',(req,res,next)=>{
    console.log(rootDir);

    console.log(products);
    // __dirname+"/views/shop.html"
    res.sendFile(path.join(rootDir,'views','shop.html'));
});
// 
module.exports = router;