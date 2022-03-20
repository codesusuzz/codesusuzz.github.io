const weather = document.getElementById("weather");
const API_KEY = "97796e24b0271bc1451dd1529b2acf6b";

// Geolocation 함수는 success, fail 두 가지 경우에 실행할 함수를 인자로 받는다.

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = data.name;
        const temp = data.main.temp;
        const weat = data.weather[0].main;
        weather.innerText = `📍 ${city}
         ${temp}°C, ${weat}`;
    })
}

function onGeoFail() {
    alert ("위치를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoFail);