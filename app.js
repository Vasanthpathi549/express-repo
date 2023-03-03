const express = require('express');
const http = require("http");
const app = express();
const path = require('path');
//Import bodyparser to parse our input
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

//Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require("./routes/shop");

app.use(adminRoutes);
app.use(shopRoutes);


// const server = http.createServer(app);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000,()=>{
    console.log("Listening at port 3000");
});