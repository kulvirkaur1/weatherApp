const request=require('request');
const forecast=(center,callback)=>{
 
    const url=`http://api.weatherstack.com/current?access_key=781a1ab900222048104cf14b8f8382de&query=${center[1]},${center[0]}`;   

request({url:url,json:true},(error,response)=>{
         
         const data={
             country:response.body.location.country,
             forecast:response.body.current
         }
         callback(data);
})

}

module.exports=forecast;