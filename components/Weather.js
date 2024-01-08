const weatherData = [
    {
        elevation: 1600,
        weather: {
            condition: "Soleado",
            temperature: "-4°C",
            humidity: "87%",
            precipitation: "98%",
            snowLine: "1200m",
            iso: "2000m",
            wind: "14Km/h"
        }
    },
    {
        elevation: 2000,
        weather: {
            condition: "Parcialmente nublado",
            temperature: "-2°C",
            humidity: "80%",
            precipitation: "90%",
            snowLine: "1400m",
            iso: "2200m",
            wind: "10Km/h"
        }
    }
];

function createWeatherHTML(weatherData) {
    const buttonsHTML = weatherData.map(info =>
        `<button class="elevation-button" data-elevation="${info.elevation}">${info.elevation}</button>`
    ).join('');

    const cardsHTML = weatherData.map(info => `
        <div class="weather-card" id="weather-${info.elevation}">
            <div class="weather-date">
                <span>Hoy</span>
            </div>
            <div class="weather-icon">
                <img src="assets/icons/weather/${sanitizeCondition(info.weather.condition)}.svg" alt="${info.weather.condition}">
            </div>
            <div class="card-content">
                <p>Estado: ${info.weather.condition}</p>
                <p>Temperatura: ${info.weather.temperature}</p>
                <p>Humedad: ${info.weather.humidity}</p>
                <p>Precipitaciones: ${info.weather.precipitation}</p>
                <p>Cota de Nieve: ${info.weather.snowLine}</p>
                <p>ISO: ${info.weather.iso}</p>
                <p>Viento: ${info.weather.wind}</p>
            </div>
        </div>
    `).join('');

    return `${cardsHTML}<div class="weather-card-buttons">${buttonsHTML}</div>`;
}

function sanitizeCondition(condition) {
    return condition.toLowerCase().replace(/\s+/g, '-');
}


function showElevation(elevation) {
    weatherData.forEach(info => {
        const element = document.getElementById(`weather-${info.elevation}`);
        element.style.display = info.elevation === elevation ? 'block' : 'none';
    });
}

function setupButtonListeners() {
    document.querySelectorAll('.elevation-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const elevation = parseInt(e.target.getAttribute('data-elevation'), 10);
            showElevation(elevation);
        });
    });
}

export { weatherData, createWeatherHTML, showElevation, setupButtonListeners };