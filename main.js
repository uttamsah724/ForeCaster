const apiKey = "312abfd953c970ceaf81f671079f6e22";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else{
    var data = await response.json(); 
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    document.querySelector(".weather").style.display = "block"; 
    document.querySelector(".error").style.display = "none"; //doing this because in the error handling it changed to "block" but now it should change
  }
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})
