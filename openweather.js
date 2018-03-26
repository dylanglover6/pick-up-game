    var APIKey = "d72055794df444fbea53f27bc22d5714";
    // default to USA only for now, 
    var city;
    // latitude and longitude placeholders to show weather for Austin  
    var lat = 30.287686;
    var lng = -97.736417;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&units=imperial&appid=" + APIKey;


    // capitalize function
    function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
};

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);
        // Transfer content to HTML
        $(".city").html("<h1>Current " + response.name + " Weather </h1>");
        // general weather overview description is an important one 
        $(".description").html("<h3>" + capitalize(response.weather[0].description) + "</h3>");
        $(".wind").text("Wind Speed (MPH): " + response.wind.speed);
        $(".temp").text("Temperature (F): " + response.main.temp);
        // also added these to divs i added
        $(".tempmin").text("Low Temperature (F): " + response.main.temp_min);
        $(".tempmax").text("High Temperature (F): " + response.main.temp_max);
      });