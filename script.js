var searchButton = document.getElementById("search-button");
var apiKey = "0e40e7fc7657400e150779275327d76e";

// Creating a search weather value
function getSearchValue() {
  var searchValue = document.getElementById("search-value").value;

  searchWeather(searchValue);
  // searchFiveDays(searchFiveDaysValue);
}

// Creating a function were it shows the result in temperature from that city
function searchWeather(searchValue) {
  console.log(searchValue);

  // Getting the information from weather API and converting them in imperial value
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchValue +
      "&units=imperial&appid=" +
      apiKey
  )
    // Returning response from JSON
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      var todayEl = document.getElementById("today");
      todayEl.textContent = "";

      // Getting the data and the name of the city
      var titleEl = document.createElement("h3");
      titleEl.classList.add("card-title");
      titleEl.textContent =
        data.name + " (" + new Date().toLocaleDateString() + ")";

      var cardEl = document.createElement("div");
      cardEl.classList.add("card");

      // Getting data from the console and defining the variables
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
      imageEl.setAttribute(
        "src",
        " http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
      );

      // Created varibles for Latituted and Longitude
      var lat = data.coord.lat;
      var lon = data.coord.lon;

      // Call for uv index using different api
      fetch(
        "http://api.openweathermap.org/data/2.5/uvi?lat=" +
          lat +
          "&lon=" +
          lon +
          "&apiKey=" +
          apiKey
      )
        // Getting return response from JSON
        .then(function (response) {
          return response.json();
        })
        .then(function (uviResponse) {
          // console.log(uviResponse);

          // Creating a var for UV Index in order to show the result
          var uvIndexEl = document.createElement("p");
          uvIndexEl.textContent = "UV Index : " + uviResponse.value;
          uvIndexEl.classList.add("card-text");

          // Call for 5 day forecast using different api
          fetch(
            "http://api.openweathermap.org/data/2.5/forecast?q=" +
              searchValue +
              "&units=imperial&appid=" +
              apiKey
          )
            // Getting return response from JSON
            .then(function (response) {
              return response.json();
            })
            .then(function (forecastResponse) {
              // console.log(forecastResponse.list);

              const list = forecastResponse.list;
              const listOnDom = document.getElementById("forecast");

              // Individual dates
              var titleEl = document.createElement("h4");
              titleEl.classList.add("card-title");
              titleEl.textContent =
                data.name + " (" + new Date().toLocaleDateString() + ")";

              // Getting 5
              for (let i = 1; i < list.length; i += 8) {
                let day = list[i];
                console.log(day);
                if (day < 1) {
                  forecastResponse = "Temp";
                } else if (day < 24) {
                  forecastResponse = "Temp";
                } else {
                  forecastResponse = "Temp";
                }

                // Getting data from the console and defining the variables
                var temperatureEl = document.createElement("p");
                temperatureEl.textContent =
                  "Temperature: " + day.main.temp + "℉";
                temperatureEl.classList.add("card-text");

                var cardBodyEl = document.createElement("div");
                cardBodyEl.classList.add("card-body");

                var dateEl = document.createElement("p");
                dateEl.textContent = day.dt_txt;
                dateEl.classList.add("card-text");

                // Shows img of the weather on that day
                var imageEl = document.createElement("img");
                imageEl.setAttribute(
                  "src",
                  " http://openweathermap.org/img/wn/" +
                    data.weather[0].icon +
                    ".png"
                );

                // Show farhenheit temperature for each day
                const span = document.createElement("span");
                span.innerText = "Temperature: " + day.main.temp + "℉";
                listOnDom.appendChild(span);

                // Getting data from the console and defining the variables
                var humidityEl = document.createElement("p");
                humidityEl.textContent = "Humidity: " + day.main.humidity + "%";
                humidityEl.classList.add("card-text");

                var cardBodyEl = document.createElement("div");
                cardBodyEl.classList.add("card-body");

                // Shows img of the weather on that day
                var imageEl = document.createElement("img");
                imageEl.setAttribute(
                  "src",
                  " http://openweathermap.org/img/wn/" +
                    data.weather[0].icon +
                    ".png"
                );
              }

              // Creating a var forecast in order to show the result
              var forecastEl = document.createElement("p");
              forecastEl.classList.add("card-text");

              // Append the variables
              titleEl.appendChild(imageEl);

              cardBodyEl.appendChild(titleEl);

              cardBodyEl.appendChild(temperatureEl);

              cardBodyEl.appendChild(humidityEl);

              cardBodyEl.appendChild(windEl);

              cardEl.appendChild(cardBodyEl);

              todayEl.appendChild(cardEl);

              cardBodyEl.appendChild(uvIndexEl);

              cardBodyEl.appendChild(forecastEl);
              // call for forecast use different api
              // call for uv index use different api
            });
        });
    });
}

// Added an event listener for the search button

searchButton.addEventListener("click", getSearchValue);
