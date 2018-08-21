const express=require('express');
const Router=express.Router();
//ejs
//pug(jade)
//swig
Router.get('./',function(res,req){
    res.send('Hello World')
})

module.exports=Router;