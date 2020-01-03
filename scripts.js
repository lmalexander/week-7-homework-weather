console.log("brand new {code}, city girls going platinum - yung miami");
const apiKey = "&APPID=1b267613807f3bffd7ce2a8a24e822cd";

// -------------------------------------------- today's date and time

// store date as variable
const todayDate = moment().format('MMMM Do YYYY');
const timeNow = moment().format("h:mm a")
// return variable to html
$("#todayDate").text("Today is " + todayDate);
$("#timeNow").text("Current Time: " + timeNow);

// --------------------------------------------- user click event
$("#searchButton").on("click" , function (event) {

// -------------------- current weather forecast

// get user input
    event.preventDefault();
    const city = $(".form-control").val();
    console.log(city);
// store query url with user input city
    const urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + apiKey;
    console.log(urlCurrent);
// ajax call to perform current weather search
    $.ajax ({
        url: urlCurrent,
        method: "GET"
    }).then(function(weatherCurrent) {
        console.log(weatherCurrent);
 // create variables with response object data
        const currentCity = weatherCurrent.name;
        const currentTemperature = weatherCurrent.main.temp;
        const currentHumidity = weatherCurrent.main.humidity;
        const currentWindSpeed = weatherCurrent.wind.speed;
 // check variables with console logs
        console.log(currentCity);
        console.log(currentTemperature);
        console.log(currentHumidity);
        console.log(currentWindSpeed);
// text variables to html
        $("#cityName").text(currentCity);
        $("#currentTemp").text("Temperature: " + currentTemperature + "°") ;
        $("#currentHum").text("Humidity: " + currentHumidity + "%");
        $("#currentWS").text("Wind Speed: " + currentWindSpeed + "MPH");
    })

//----------------------- five day forecast
// five day url    
    const urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + apiKey;
    console.log(urlFiveDay);
// five day weather search ajax call
    $.ajax ({
        url: urlFiveDay,
        method: "GET"
    }).then(function(weatherFive) {
        console.log(weatherFive);

// loop through forecast object
for (let i = 0; i < weatherFive.list.length; i++) {
// convert forecast date        
    const dateRaw = weatherFive.list[i].dt_txt;
    const forecastDate = moment(dateRaw).format("dddd MMM Do");
// response object variables
    const forecastTempMax = weatherFive.list[i].main.temp_max;
    const forecastTempMin = weatherFive.list[i].main.temp_min;
    const forecastHum = weatherFive.list[i].main.humidity;
    const forecastIcon = weatherFive.list[i].weather.icon;
// check in the console
    console.log(forecastDate);
    console.log(forecastTempMax);
    console.log(forecastTempMin);
    console.log(forecastHum);
    console.log(forecastIcon);         
// create forecast card 
    const forecastCardNew = function createForecastCard() {
        $("<div class=card id=forecastCard>");
        $("<div class=card-body id=forecastCardBody>");
        $("<div class=card-title id=forecastDate>").text(forecastDate)
        $("<div class=card-title id=forecastTempMax>").text(forecastTempMax)
        $("<div class=card-title id=forecastTempMin>").text(forecastTempMin)
        $("<div class=card-title id=forecastHum>").text(forecastHum)
        
    }
    forecastCardNew;
// append forecast card to card group
    document.getElementById("forecastCardGroup").append(forecastCardNew);
// stop forloop at 5 days
    if (i > 4) {
        break;
    }
        
}
    })
})


