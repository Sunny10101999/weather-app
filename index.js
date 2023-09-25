const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '617d3e5aa3msh7c3703bf9f60e06p1fe248jsn88d60e7759c6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function fetchData(city) {
    try {
        const response = await fetch(`${url}?city=${city}`, options);
        const data = await response.json(); // Parse the response as JSON

        // Update the HTML elements with the fetched data
        document.getElementById('cityname').textContent = city;
        document.getElementById('temp').textContent = data.temp;
        document.getElementById('temp2').textContent = data.temp;
        document.getElementById('min_temp').textContent = data.min_temp;
        document.getElementById('max_temp').textContent = data.max_temp;
        document.getElementById('feels_like').textContent = data.feels_like;
        document.getElementById('humidity').textContent = data.humidity;
        document.getElementById('humidity2').textContent = data.humidity;
        document.getElementById('wind_speed').textContent = data.wind_speed;
        document.getElementById('wind_degrees').textContent = data.wind_degrees;
        document.getElementById('sunrise').textContent = data.sunrise;
        document.getElementById('sunset').textContent = data.sunset;


        console.log(data); // This will log the entire API response object
    } catch (error) {
        console.error(error);
    }
}

let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const cityInput = document.getElementById('city');
    const city = cityInput.value;
    fetchData(city);
});

// Fetch weather data for Delhi initially
fetchData('Delhi');
