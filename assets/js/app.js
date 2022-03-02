// fetch data from https://openweathermap.org

const loadWeatherData = () => {
    const searchText = document.getElementById('search-text').value;
    const API_KEY = `183a3198dcfece4bd92256a8290f45b5`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => setWeatherData(data))
}

// Ser innerText

const setInnerText = (field, value) => {
    const getField = document.getElementById(field);
    getField.innerText = value
}

// dynamically update weather status

const setWeatherData = (data) => {
    setInnerText('city', data.name)
    setInnerText('temp', data.main.temp)
    setInnerText('condition', data.weather[0].main)
    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
}