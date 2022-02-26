document.querySelector(".form").addEventListener('submit',(e)=>{
       e.preventDefault();
       const location=document.querySelector(".input").value;
       if(location!=''){
       fetch(`/weather?address=${location}`).then((response)=>{
            response.json().then((data)=>{
                          
                    document.querySelector(".results").classList.add("results_real");
                    document.querySelector(".results").innerHTML=`In ${location.toUpperCase()},${data.country.toUpperCase()} It is ${data.forecast.temperature}° Celsius and ${data.forecast.weather_descriptions[0]} observed at ${data.forecast.observation_time}.` ;
                    document.querySelector(".header").innerHTML=`<img src="${data.forecast.weather_icons[0]}" class="image">`    
     
      })
      })
     }
     else{
          document.querySelector(".results").classList.add("results_real");
         document.querySelector(".results").innerHTML='Please Provide valid address';
     }
})