var searchButton = document.getElementById("search-button");
var apiKey = "0e40e7fc7657400e150779275327d76e";









function getSearchValue() {
    var searchValue = document.getElementById("search-value").value;

    searchWeather(searchValue);
};


function searchWeather(searchValue) {
    console.log(searchValue);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&units=imperial&appid=" + apiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        var todayEl = document.getElementById("today");
        todayEl.textContent = "";

        var titleEl = document.createElement("h3");
        titleEl.classList.add("card-title");
        titleEl.textContent = data.name + " (" + new Date().toLocaleDateString() + ")";

        var cardEl = document.createElement("div");
        cardEl.classList.add("card");

        var temperatureEl = document.createElement("p");
        temperatureEl.textContent = "Temperature; " + data.main.temp + "℉";
        temperatureEl.classList.add("card-text");

        var humidityEl = document.createElement("p");
        humidityEl.textContent = "Humidity; " + data.main.humidity + "%";
        humidityEl.classList.add("card-text");

        var windEl = document.createElement("p");
        windEl.textContent = "Wind; " + data.wind.speed + "mph";
        windEl.classList.add("card-text");

        var cardBodyEl = document.createElement("div");
        cardBodyEl.classList.add("card-body");

        var imageEl = document.createElement("img");
        imageEl.setAttribute("src", " http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");

        titleEl.appendChild(imageEl);

        cardBodyEl.appendChild(titleEl);
        
        cardBodyEl.appendChild(temperatureEl);

        cardBodyEl.appendChild(humidityEl);

        cardBodyEl.appendChild(windEl);
        
        cardEl.appendChild(cardBodyEl);

        todayEl.appendChild(cardEl);

        // getForecast(searchValue);
        
        // getUvIndex(data.coord.lat, data.coord.lon);
        
        // call for forecast use different api
        // call for uv index use different api

        })
        
}


























searchButton.addEventListener("click", getSearchValue);