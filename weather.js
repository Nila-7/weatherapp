function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "d393abfb04aee86b32924fe6100b7f17"; // ✅ Your API key
  
    if (!city) {
      alert("Please enter a city name!");
      return;
    }
  
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then(response => response.json())
      .then(data => {
        if (data.cod === "404") {
          document.getElementById("weatherInfo").innerHTML = "❌ City not found!";
          return;
        }
  
        const weatherHtml = `
          <h2>📍 ${data.name}, ${data.sys.country}</h2>
          <p>🌡️ Temperature: ${data.main.temp}°C</p>
          <p>☁️ Condition: ${data.weather[0].description}</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
        document.getElementById("weatherInfo").innerHTML = weatherHtml;
      })
      .catch(error => {
        document.getElementById("weatherInfo").innerText = "⚠️ Error fetching data.";
        console.error(error);
      });
  }
  