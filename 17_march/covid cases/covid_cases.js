async function covid_cases(){
    const loc=document.getElementById("place").value;
    const url="https://www.covid19india.org/state/"+loc;
    const res=await fetch(url);
    const result=await res.json();
    
    let {Active,Confirmed,Recovered,Deceased}=result;
    console.log("Confirmed cases:"+Confirmed+"Recovered cases:"+Recovered+"Active Cases:"+Active+"Deceased cases:"+Deceased);
    
}