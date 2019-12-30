console.log("brand new {code}, city girls going platinum - yung miami");
const apiKey = "&APPID=1b267613807f3bffd7ce2a8a24e822cd";

// ----------------- current weather forecast

// get user input
$("#searchButton").on("click" , function (event) {
    event.preventDefault();
    const city = $(".form-control").val();
    console.log(city);
// store query url with user input city
    let urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + apiKey;
    console.log(urlCurrent);
// ajax call to perform current weather search
    $.ajax ({
        url: urlCurrent,
        method: "GET"
    }).then(function(weatherCurrent) {
        console.log(weatherCurrent);
 // create variables with response object data for template literals
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


})


//------------------ five day forecast