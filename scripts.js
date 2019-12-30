console.log("brand new {code}, city girls going platinum - yung miami");

// ----------------- current weather forecast

// get user input
$("#searchButton").on("click" , function (event) {
    event.preventDefault();
    const city = $(".form-control").val();
    console.log(city);

// store query url with user input city
    let urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=1b267613807f3bffd7ce2a8a24e822cd";
    console.log(urlCurrent);

// ajax call to perform current weather search
    $.ajax ({
        url: urlCurrent,
        method: "GET"
    }).then(function(weatherCurrent) {
        console.log(weatherCurrent);
 //       

    })


})


//------------------ five day forecast