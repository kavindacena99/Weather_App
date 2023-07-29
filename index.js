const apiKey = "ed8eed10fe10d0c96a0913cc8bf50937";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchIt");
const searchBtn = document.querySelector(".clickThis");

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    var howItIs = data.weather[0].main;
    console.log(howItIs);

    let spd = data.wind.speed*36;
    spd = spd/10;

    const icons = document.querySelector(".weather-icon");
    icons.src = "images/" + howItIs + ".png";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(spd) + " km/h";
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
}   




