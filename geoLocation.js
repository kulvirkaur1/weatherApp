const request=require('request');

const geoLocation=(address,callback)=>{
     let center;          
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaGFyc2hkZWVwMTgiLCJhIjoiY2tmaTlidTRhMDRwZzJzcWpmbjNsOW1tMCJ9.6u9_rFhdRjULn-oulB3j0A`;
           
           request({url:url,json:true},(error,response)=>{
                         if(response.body){
                         center= response.body.features[0].center;
                         callback(center);
                         }
                         else callback(null)
           })
}

module.exports=geoLocation;