var searchButton = document.getElementById("search-button");
var apiKey = "0e40e7fc7657400e150779275327d76e";
var lat = "41.85";
var lon = "-87.65";






// Creating a search weather value
function getSearchValue() {
    var searchValue = document.getElementById("search-value").value;

    searchWeather(searchValue);
};

// Creating a function were it shows the result in temperature from that city
function searchWeather(searchValue) {
    console.log(searchValue);

    // Getting the information from weather API and converting them in imperial value
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&units=imperial&appid=" + apiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        var todayEl = document.getElementById("today");
        todayEl.textContent = "";
        // 
        var titleEl = document.createElement("h3");
        titleEl.classList.add("card-title");
        titleEl.textContent = data.name + " (" + new Date().toLocaleDateString() + ")";
        
        var cardEl = document.createElement("div");
        cardEl.classList.add("card");

        // Getting data from the console
        var temperatureEl = document.createElement("p");
        temperatureEl.textContent = "Temperature: " + data.main.temp + "℉";
        temperatureEl.classList.add("card-text");

        var humidityEl = document.createElement("p");
        humidityEl.textContent = "Humidity: " + data.main.humidity + "%";
        humidityEl.classList.add("card-text");

        var windEl = document.createElement("p");
        windEl.textContent = "Wind: " + data.wind.speed + "mph";
        windEl.classList.add("card-text");

        var cardBodyEl = document.createElement("div");
        cardBodyEl.classList.add("card-body");

        // Shows img of the weather on that day
        var imageEl = document.createElement("img");
        imageEl.setAttribute("src", " http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");

        // getUvIndex(data.coord.lat, data.coord.lon);
        var uvIndexEl = document.createElement("p")
        uvIndexEl.textContent = "UV Index : " + 
        uviResponse.value;
        uvIndexEl.classList.add("card-text");
        // 
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&units=imperial&appid=" + apiKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      lat = data.coord.lat;
      lon = data.coord.lon;        



  
        // var latitudeEl = document.createElement("lat");
        // latitudeEl.textContent = "Latitude" + data.coord.lat + "appid";
        // latitudeEl.classList.add("card-text");

        // var logitudeEl = document.createElement("lat");
        // logitudeEl.textContent = "Latitude" + data.coord.lon + "appid";
        // logitudeEl.classList.add("card-text");
        // getForecast(searchValue);


            
        
        titleEl.appendChild(imageEl);
        
        cardBodyEl.appendChild(titleEl);
        
        cardBodyEl.appendChild(temperatureEl);

        cardBodyEl.appendChild(humidityEl);

        cardBodyEl.appendChild(windEl);
        
        cardEl.appendChild(cardBodyEl);

        todayEl.appendChild(cardEl);
        
        cardBodyEl.appendChild(uvIndexEl);
        // call for forecast use different api
        // call for uv index use different api

        
    })  
    
    
}
    
    searchButton.addEventListener("click", getSearchValue);


























