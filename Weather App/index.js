const apiKey = "b1ce27c6d4691701497367eadbc3b5d1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);



    if(response.status == 404){
        var error = document.querySelector('.error');
        error.style.color = "red";
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";

    }else {

        var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main === "clouds"){
        weatherIcon.src= "images/clouds.png";
    }else if (data.weather[0].main == "clear"){
        weatherIcon.src= "images/clear.png";

    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src= "images/Rain.png";
    }else if (data.weather[0].main == "Mist"){
        weatherIcon.src= "images/mist.png";
    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src= "images/drizzle.png";
    }else if (data.weather[0].main == "snow"){
        weatherIcon.src= "images/snow.png";

    }else {
        weatherIcon.src="images/humidity.png"
    }
    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";
}

    }

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
checkWeather();