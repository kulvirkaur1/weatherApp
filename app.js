const geoLocation=require('./geoLocation.js')
const forecast=require('./forecast.js')
const path=require('path');

const express=require('express');
const app=express();

const port=process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('',(req,res)=>{
        res.sendFile(path.join(__dirname,'./index.html'))
})


app.get('/weather',(req,res)=>{
    let result;

    geoLocation(req.query.address,(center)=>{
        if(center){
        forecast(center,(data)=>{ 
                    res.send(data);            
        }) }
        else
        res.send({error:"error"});              
 });

})

app.listen(port,()=>{
      console.log('Server is running!');
})