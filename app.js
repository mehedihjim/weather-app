const searchButton = document.querySelector('.search-button');
const searchBar = document.querySelector('.search-bar');
const locationElement = document.querySelector('.location');
const temperatureElement = document.querySelector('.temperature');
const weatherElement = document.querySelector('.weather');

const API_KEY = '42ecef3669b82aab510b93b8af7db6c6';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

searchButton.addEventListener('click', () => {
    const city = searchBar.value;
    fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name + ', ' + data.sys.country;
            temperatureElement.textContent = data.main.temp + '°C';
            weatherElement.textContent = data.weather[0].main;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
