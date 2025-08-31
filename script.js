async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "0faa755c8d0e6f8bb38372e3be445e85"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    document.getElementById("weather").innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡️ ${data.main.temp}°C</p>
      <p>☁️ ${data.weather[0].description}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("weather").innerHTML = `<p>❌ ${error.message}</p>`;
  }
}
