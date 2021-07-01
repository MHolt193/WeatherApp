let key = "ad1c48d85f32466eac3154231210107";
let q = 90017;
let defaultLocation = document.querySelector('.locationName')
let temp = document.querySelector('.currentTemp')
let condition = document.querySelector('.skyCondition')
let forecast = document.querySelector('.highLow')


addEventListener('load', (e) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=ad1c48d85f32466eac3154231210107&q=90017`,)
    .then(response => response.json())
        .then(data => {
            console.log(data)
            defaultLocation.textContent = `${data.location.name}, ${data.location.region}`;
            temp.innerHTML= `${data.current['temp_f']}<span>&#176;</span>`; 
            condition.innerHTML = `<img src="${data.current.condition.icon}" alt="icon">${data.current.condition.text}`
        });
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=ad1c48d85f32466eac3154231210107&q=90017&days=1`,)
    .then(response => response.json())
        .then(data => {
            console.log(data)

            })
})