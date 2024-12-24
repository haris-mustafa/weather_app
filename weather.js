url= "https://api.openweathermap.org/data/2.5/weather?q=";
async function weather(){

    id= "&appid=e7ddab4bcccc5b387a33e7bdb98056e2";
    try{

        res= await axios.get(url+city+id);
        return res.data;
    }
    catch(e){
        return "ERROR COUGHT ", e;

    }
    
}

btn= document.querySelector("#searchButton");

btn.addEventListener("click", async function() {

     city= document.querySelector("#locationInput").value;
    allData= await weather(city);
    console.log(allData);
    wDetails= allData.main;
    wDisc= allData.weather;


    show(wDetails, wDisc);
})

function show(wDetails ,wDisc){
    cloud = allData.clouds
    h2= document.querySelector("h2");
    h2.innerText= allData.name;
    temp= document.querySelector("#temperature");
    temp.innerText= `Feels like : ${wDetails.feels_like +`\n Humidity: ${wDetails.humidity}`+ `\n Clouds: ${cloud.all}%`} `
    for (dscr of wDisc){

            description= document.querySelector("#description")
        description.innerText= dscr.description;

        
    }

    // for(wdiscs of wDisc ){

        
    
    // } 
    // clouds= document.querySelector("#clouds");
    // clouds.innerText= `Clouds:${cloud.all} `

      


    



}





