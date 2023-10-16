
const apiKey = "c15c6aef28c7e40af5a43a287e7b65c1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button"); 
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else{
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed;
    
    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    document.querySelector(".weather").style.display = "block";}
    document.querySelector(".error").style.display = "none";
        
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
