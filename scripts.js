var queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=3582383&APIID=3fb1d926f6bf2a8a109a00d1602fd154";

$.ajax({
    url: queryURL,
    method: "GET"
});
