
const btn = document.getElementById("searchBtn");
const input = document.getElementById("city");
const locationBtn = document.getElementById("locationBtn");


btn.addEventListener("click", getWeather);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") getWeather();
});

locationBtn.addEventListener("click", getLocationWeather);


async function getWeather() {
    const city = input.value.trim();

    if (!city) {
        showError("Enter a city");
        return;
    }

    showLoading();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod !== 200) {
            showError(data.message);
            return;
        }

        displayWeather(data);

    } catch (err) {
        showError("Error fetching data");
    }
}


function getLocationWeather() {
    if (!navigator.geolocation) {
        showError("Geolocation not supported");
        return;
    }
    showLoading();
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            try {
                const res = await fetch(url);
                const data = await res.json();

                if (data.cod !== 200) {
                    showError(data.message);
                    return;
                }

                displayWeather(data);

            } catch (err) {
                showError("Location fetch error");
            }
        },
        () => {
            showError("Location permission denied");
        }
    );
}


function displayWeather(data) {
    const icon = data.weather[0].main;

    const result = `
        <h2>${data.name}</h2>
        <h1>${data.main.temp}°C</h1>
        <p>${getIcon(icon)} ${icon}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
    `;

    document.getElementById("weatherResult").innerHTML = result;
}


function getIcon(type) {
    const icons = {
        Clouds: "☁️",
        Clear: "☀️",
        Rain: "🌧️",
        Snow: "❄️",
        Thunderstorm: "⛈️"
    };

    return icons[type] || "🌍";
}


function showLoading() {
    document.getElementById("weatherResult").innerHTML = "⏳ Loading...";
}


function showError(msg) {
    document.getElementById("weatherResult").innerHTML = `❌ ${msg}`;
}
getLocationWeather();