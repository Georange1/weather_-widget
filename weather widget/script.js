async function day_cal(colorSet, index) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric");
    const data = await response.json();

    if (index >= 0) {
        
    let temp = data.daily[index].temp.day;
    let feels_like = data.daily[index].feels_like.day;
    let pressure = data.daily[index].pressure;
    let humidity = data.daily[index].humidity;
    let wind_speed = data.daily[index].wind_speed;
    let wind_deg = data.daily[index].wind_deg;
    let clouds = data.daily[index].clouds;
    let weather_icon = data.daily[index].weather[0].icon;

    var icon = "http://openweathermap.org/img/w/" + weather_icon + ".png";

    document.getElementById("temp").innerHTML = temp + " &#8451;";
    document.getElementById("feelsLike").innerHTML = feels_like;
    document.getElementById("pressure").innerHTML = pressure + " hPa";
    document.getElementById("humidity").innerHTML = humidity + " %";
    document.getElementById("windSpeed").innerHTML = wind_speed + " m/s";
    document.getElementById("windDirection").innerHTML = wind_deg;
    document.getElementById("clouds").innerHTML = clouds;
    document.getElementById("weatherIcon").src = icon;

    colorBlack();
    colorSet.style.color = "LightSteelBlue";

    } else {

    let temp = data.current.temp;
    let feels_like = data.current.feels_like;
    let pressure = data.current.pressure;
    let humidity = data.current.humidity;
    let wind_speed = data.current.wind_speed;
    let wind_deg = data.current.wind_deg;
    let clouds = data.current.clouds;
    let weather_icon = data.current.weather[0].icon;

    var icon = "http://openweathermap.org/img/w/" + weather_icon + ".png";

    document.getElementById("temp").innerHTML = temp + " &#8451;";
    document.getElementById("feelsLike").innerHTML = feels_like;
    document.getElementById("pressure").innerHTML = pressure + " hPa";
    document.getElementById("humidity").innerHTML = humidity + " %";
    document.getElementById("windSpeed").innerHTML = wind_speed + " m/s";
    document.getElementById("windDirection").innerHTML = wind_deg;
    document.getElementById("clouds").innerHTML = clouds;    
    document.getElementById("weatherIcon").src = icon;

    colorBlack();
    document.getElementById("today").style.color = "LightSteelBlue";
    }
}

day_cal();

function colorBlack() {
    document.getElementById("today").style.color = "black";
    document.getElementById("day1").style.color = "black";
    document.getElementById("day2").style.color = "black";
    document.getElementById("day3").style.color = "black";
    document.getElementById("day4").style.color = "black";
    document.getElementById("day5").style.color = "black";
    document.getElementById("day6").style.color = "black";
    document.getElementById("day7").style.color = "black";
    document.getElementById("day8").style.color = "black";
}