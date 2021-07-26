//use the rest countries to print the country name and lat and long informations.
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function(){
  var data=JSON.parse(this.response);
  console.log(data);

 let casia = data.filter((e)=>e.region==="Asia")
 console.log(casia);
 let popu=data.filter((e)=>e.population <= 200000)
 console.log(popu)
 let tpopu=data.reduce((acc,cv)=>acc+cv.population,0)
 console.log(tpopu)
 let usd=data.filter((x)=>{
   for(var i in x.currencies){
     if(x.currencies[i].code==="USD"){
       return true;
     }
   }
 })
 console.log(usd)
}