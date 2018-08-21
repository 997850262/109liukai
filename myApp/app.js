const express=require('express');
const route=require('./route');
const app=new express();
// app.get('/',function(req,res){

// })
app.set('views','./views');
app.set('')
app.use(route)
app.listen(3000,function(){
    console.log('Example 3000')
})