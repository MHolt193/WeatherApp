//declare default values and current/max tile count
let key = "ad1c48d85f32466eac3154231210107";
let defaultLocation = document.querySelector('.locationName')
let defaultTemp = document.querySelector('.currentTemp')
let defaultCondition = document.querySelector('.skyCondition')
let defaultForecast = document.querySelector('.highLow')
let maxTiles=9
let currentTiles=1

//page load event listener for default weather
addEventListener('load', (e) => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=ad1c48d85f32466eac3154231210107&q=83651&days=1`,)
    .then(response => response.json())
        .then(data => {
            console.log(data)
            defaultLocation.textContent = `${data.location.name}, ${data.location.region}`;
            defaultTemp.innerHTML= `${data.current['temp_f']}<span>&#176;</span>`; 
            defaultCondition.innerHTML = `<img src="${data.current.condition.icon}" alt="icon">${data.current.condition.text}`;
            defaultForecast.innerHTML = `Hi:${data.forecast.forecastday[0].day.maxtemp_f}<span>&#176;</span>/Lo:${data.forecast.forecastday[0].day.mintemp_f}<span>&#176;</span>`
        });
});
//declare search bar
let zipCode = document.querySelector('#zipCode');
let search = document.getElementById('search');

//event listener on search button to add tiles to page
search.addEventListener('click', (event) =>{
//declare added tiles
let weatherTile = document.getElementById(`weatherTile${currentTiles+1}`)
let locationName = document.querySelector(`#locationName${currentTiles+1}`);
let temp = document.querySelector(`#currentTemp${currentTiles+1}`);
let condition = document.querySelector(`#skyCondition${currentTiles+1}`);
let forecast = document.querySelector(`#highLow${currentTiles+1}`);
    //if statement to make sure not too many tiles are added to page
    if(currentTiles <= maxTiles && zipCode.value !== ''){
        weatherTile.style.display = 'flex'
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=ad1c48d85f32466eac3154231210107&q=${zipCode.value}&days=1`,)
            .then(response => response.json())
                .then(data => {
                    console.log(currentTiles)
                    locationName.textContent = `${data.location.name}, ${data.location.region}`;
                    temp.innerHTML= `${data.current['temp_f']}<span>&#176;</span>`; 
                    condition.innerHTML = `<img src="${data.current.condition.icon}" alt="icon">${data.current.condition.text}`;
                    forecast.innerHTML = `Hi:${data.forecast.forecastday[0].day.maxtemp_f}<span>&#176;</span>/Lo:${data.forecast.forecastday[0].day.mintemp_f}<span>&#176;</span>`
        });
        
    }else if(currentTiles < maxTiles && zipCode.value === ''){
        alert(' Error: Must enter a zip code or town name to add a tile')
    }
    currentTiles++;

})
//declare tile close button
let closeTile = document.getElementsByClassName('closeTile');

//add event listener for click on tile close
for(let i = 0; i< closeTile.length; i++){
closeTile[i].addEventListener('click', () => {
    closeTile[i].parentElement.style.display = 'none';
    currentTiles--;
})
}





