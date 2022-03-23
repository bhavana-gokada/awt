async function display(){
    const cityname=document.getElementById("city").value;
    console.log(cityname);
    const url="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=fa6130cad2332c5565d31480e20231a1";
    const res=await fetch(url);
    var result=await res.json();
    
    let {main:{temp,temp_min,temp_max,humidity}}=result;
    console.log("temp:"+temp+"temp_min:"+temp_min+"temp_max:"+temp_max+"humidity:"+humidity);
    document.getElementById("reslt").innerHTML=temp;
}