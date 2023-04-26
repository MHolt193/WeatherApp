
//weatherapi.com api section used for these variables// 
const key = "ad1c48d85f32466eac3154231210107";
const locationName = document.querySelector('.locationName');
const currentTemp = document.querySelector('.currentTemp');
const skyCondition = document.querySelector('.skyCondition');
const highLow = document.querySelector('.highLow');
const feelsLike = document.getElementById('feelsLike');
const windSpeed = document.getElementById('windSpeed');
const windDirection = document.getElementById('windDirection');
const humidity = document.getElementById('humidity');
const uv = document.getElementById('uv');
const html = document.querySelector('.page');
const quote = document.querySelector('.quoteText');
const search = document.getElementById('search');
const zipCode = document.getElementById('zipCode');
const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/

//weatherbit.io api used for 7 day forecast
//weatherbit.io api section declarations below
const weatherbitKey = "7d211968c32542f1bb96c055f24013e0";
const forecastDayCard1 = document.getElementById('forecastDayCard1');
const forecastDayCard2 = document.getElementById('forecastDayCard2');
const forecastDayCard3 = document.getElementById('forecastDayCard3');
const forecastDayCard4 = document.getElementById('forecastDayCard4');
const forecastDayCard5 = document.getElementById('forecastDayCard5');
const forecastDayCard6 = document.getElementById('forecastDayCard6');
const forecastDayCard7 = document.getElementById('forecastDayCard7');


// declare quotes for weather types
let cloudyQuote = ["'The cloudy weather melts at length into beauty, and the brightest smiles of the heart are born of its tears.' -Hosea Ballou", "'The flower that follows the sun does so even in cloudy days.' -Robert Leighton", "'Don’t forget: Beautiful sunsets need cloudy Skies.' -Paulo Coelho", "'A cloudy day is no match for a sunny disposition.' -William Arthur Ward", "'Our mind is like a cloudy sky: in essence clear and pure, but overcast by clouds of delusions. Just as the thickest clouds can disperse, so, too, even the heaviest delusions can be removed from our mind.' -Kelsang Gyatso"];
let foggyQuote = ["'When life is foggy, path is unclear and mind is dull, remember your breath. It has the power to give you the peace. It has the power to resolve the unsolved equations of life.' -Amity Ray", "'If you want to see what the fog hides in itself, don't wait for the fog to disperse! Instead of waiting for something to happen in this short life, do something immediately! Enter the fog!'-Mehmet Murat ildan", "'He who gives you many dreams is a great master, and the foggy weather is such a master!'― Mehmet Murat ildan", "'Sometimes you enter a dense fog on the road you are traveling! What should you do? Very simple! Take a break from the journey, wait calmly, the fog will be dispersed!' ― Mehmet Murat ildan", "'The best thing you can do to enjoy a foggy day is by doing things you love to do.' -Sophie Madden"];
let lightningQuote = ["'I get my best ideas in a thunderstorm. I have the power and majesty of nature on my side.'-Ralph Steadman", "'Thunderstorms are as much our friends as the sunshine'-Criss Jami", "'Run outside during a thunderstorm That downpour, that conquered hesitation, that exhilaration That’s what unlonely is like'-David Levithan", "'the thing about thunderstorms is that there’s always a sense of peace when once the storm is over.' -Tabitha G. Kelly", "'this heart yearns... for the salt og unsmelt air, unswept thunderstorms... unknown adventures' -Sanober Khan"];
let rainyQuote = ["'Like the sky opens after a rainy day we must open to ourselves. Learn to love yourself for who you are and open so the world can see you shine.' -James Poland", "'Give thanks for the rain in your life which waters the flowers of your soul.' -Jonathan Lockwood Huie", "'The best thing one can do when it’s raining is to let it rain.' -Henry Wadsworth Longfellow", "'Some people walk in the rain, others just get wet.' -Roger Miller", "'A rainy day is an equalizer. You don’t know what’s going to happen. You just take what you can get.' -Charlie Harvey"];
let sunnyQuote = ["'Sunshine and happiness go together like fish and chips!'-Cathrine Pulsifer","'If you hear a kind word spoken of some worthy soul you know, It may fill his heart with sunshine if you'd only tell him so.' -Unknown", "'You sure do make it a Sunny day'", "'A cheerful friend is like a sunny day, Spreading brightness all around...' -John Lubcock", "'When the sun is shining I can do anything; no mountain is too high, no trouble too difficult to overcome.' -Wilma Rudolph"];
let snowQuote = ["'When it snows, you have two choices: shovel or make snow angels'-Unknown", "'Even the strongest blizzards start with a single snowflake.' -Sara Raasch", "'It takes a snowflake two hours to fall from cloud to earth. Can’t you just see its slow, peaceful decent?' -Amy Krouse Rosenthal", "'To appreciate the beauty of a snowflake, it is necessary to stand out in the cold.' -Aristotle", "'Some people spend their entire lives seeing the snow without ever seeing the magic in the existence of one snowflake.' -Emily Littlejohn" ];


// random quote function
let randomQuote = (inputArr) => {
 let i = Math.floor(Math.random() * 5);
 return inputArr[i];
}



//Event Listeners Below

//Page load event Listener// 
addEventListener('load', () => {
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(position => {
            console.log(position.coords.latitude)
         let lat = position.coords.latitude
         let long = position.coords.longitude
        
        
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${lat},${long}&days=10`,)
    .then(response => response.json())
        .then(data => {
            console.log(data)
            locationName.textContent = `${data.location.name}, ${data.location.region}`;
            currentTemp.innerHTML= `${data.current['temp_f']}<span>&#176;</span>`; 
            skyCondition.innerHTML = `<img src="${data.current.condition.icon}" alt="icon">${data.current.condition.text}`
            switch(data.current.condition.text){
                case "Sunny" :
                case "Clear":
                    html.style.backgroundImage = 'url(img/sunny-hillside-1407934.JPG)';
                    quote.textContent = randomQuote(sunnyQuote);
                    break;
                case "Partly cloudy":
                    html.style.backgroundImage = 'url(img/partly-cloudy-1173077.jpg)';
                    quote.textContent = randomQuote(cloudyQuote);
                    break;
                case "Fog":
                case "Mist":
                case "Freezing fog":
                    html.style.backgroundImage = 'url(img/foggy-morning-1468348.jpg)';
                    quote.textContent = randomQuote(foggyQuote);
                    break;
                case "Cloudy":
                case "Overcast":
                    html.style.backgroundImage = 'url(img/cloudy-scotland-1392069.jpg)';
                    quote.textContent = randomQuote(cloudyQuote);
                    break;
                case "Light rain":
                case "Patchy freezing drizzle possible":
                case  "Patchy light drizzle":
                case  "Light drizzle":
                case  "Patchy light rain":
                case  "Patchy rain possible":
                case  "Moderate rain at times":
                case "Moderate rain":
                case  "Heavy rain at times":
                case  "Heavy rain":
                case  "Light freezing rain":
                case  "Light rain shower":
                case  "Torrential rain shower":
                case  "Moderate or heavy rain shower":
                    html.style.backgroundImage = 'url(img/rain-14884912.jpg)';
                    quote.textContent = randomQuote(rainyQuote);
                    break;
                case "Thundery outbreaks possible":
                case "Patchy light rain with thunder":
                case "Moderate or heavy rain with thunder":
                case "Patchy light snow with thunder":
                case "Moderate or heavy snow with thunder":
                    html.style.backgroundImage = 'url(img/lightning-1186391.jpg)';
                    quote.textContent = randomQuote(lightningQuote);
                    break;
                case "Light snow showers" :
                case "Moderate or heavy snow showers" :
                case "Light showers of ice pellets" :
                case "Moderate or heavy showers of ice pellets":
                    html.style.backgroundImage = 'url(img/trees-in-snow-1396854.jpg)';
                    quote.textContent = randomQuote(snowQuote);
                    break;
                default:
                html.style.backgroundImage = 'url(img/sunny-hillside-1407934.jpg)';
                quote.textContent = randomQuote(sunnyQuote);
            }
            highLow.innerHTML =`Hi:${data.forecast.forecastday[0].day.maxtemp_f}<span>&#176;</span$>/Lo:${data.forecast.forecastday[0].day.mintemp_f}<span>&#176;</span>`;
            feelsLike.innerHTML =`<i class="fas fa-thermometer-full"></i> Feels Like: ${data.current.feelslike_f}<span>&#176;</span>`;
            windSpeed.innerHTML = `<i class="fas fa-wind"></i> Wind Speed: ${data.current.wind_mph} MPH`;
            windDirection.innerHTML = ` <i class="fas fa-compass"></i> Wind Direction: ${data.current.wind_dir}`;
            humidity.innerHTML = `<i class="fas fa-water"></i> Humidity: ${data.current.humidity}%`
            uv.innerHTML = `<i class="fas fa-sun"></i> UV Index: ${data.current.uv}`
        });
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=7d211968c32542f1bb96c055f24013e0&units=I&days=8&&lat=${lat}&lon=${long}&country=US`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        forecastDayCard1.innerHTML = `<p>${data.data[1].datetime}</p><img class="icon" src="/img/icons/${data.data[1].weather.icon}.png" alt="icon"><p>Hi:${data.data[1].max_temp}<span>&#176;</span>/Lo:${data.data[1].min_temp}<span>&#176;</span></p>`
        forecastDayCard2.innerHTML = `<p>${data.data[2].datetime}</p><img class="icon" src="/img/icons/${data.data[2].weather.icon}.png" alt="icon"><p>Hi:${data.data[2].max_temp}<span>&#176;</span>/Lo:${data.data[2].min_temp}<span>&#176;</span></p>`
        forecastDayCard3.innerHTML = `<p>${data.data[3].datetime}</p><img class="icon" src="/img/icons/${data.data[3].weather.icon}.png" alt="icon"><p>Hi:${data.data[3].max_temp}<span>&#176;</span>/Lo:${data.data[3].min_temp}<span>&#176;</span></p>`
        forecastDayCard4.innerHTML = `<p>${data.data[4].datetime}</p><img class="icon" src="/img/icons/${data.data[4].weather.icon}.png" alt="icon"><p>Hi:${data.data[4].max_temp}<span>&#176;</span>/Lo:${data.data[4].min_temp}<span>&#176;</span></p>`
        forecastDayCard5.innerHTML = `<p>${data.data[5].datetime}</p><img class="icon" src="/img/icons/${data.data[5].weather.icon}.png" alt="icon"><p>Hi:${data.data[5].max_temp}<span>&#176;</span>/Lo:${data.data[5].min_temp}<span>&#176;</span></p>`
        forecastDayCard6.innerHTML = `<p>${data.data[6].datetime}</p><img class="icon" src="/img/icons/${data.data[6].weather.icon}.png" alt="icon"><p>Hi:${data.data[6].max_temp}<span>&#176;</span>/Lo:${data.data[6].min_temp}<span>&#176;</span></p>`
        forecastDayCard7.innerHTML = `<p>${data.data[7].datetime}</p><img class="icon" src="/img/icons/${data.data[7].weather.icon}.png" alt="icon"><p>Hi:${data.data[7].max_temp}<span>&#176;</span>/Lo:${data.data[7].min_temp}<span>&#176;</span></p>`

    });
})    
}

});


//search different city event listener
search.addEventListener('submit', (e) =>{
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${zipCode.value}&days=10`,)
    .then(response => response.json())
        .then(data => {
            console.log(data)
            currentTemp.innerHTML= `${data.current['temp_f']}<span>&#176;</span>`; 
            skyCondition.innerHTML = `<img src="${data.current.condition.icon}" alt="icon">${data.current.condition.text}`
            locationName.textContent = `${data.location.name}, ${data.location.region}`;
            switch(data.current.condition.text){
                case "Sunny" :
                case "Clear":
                    html.style.backgroundImage = 'url(/img/sunny-hillside-1407934.jpg)';
                    quote.textContent = randomQuote(sunnyQuote);
                    break;
                case "Partly cloudy":
                    html.style.backgroundImage = 'url(/img/partly-cloudy-1173077.jpg)';
                    quote.textContent = randomQuote(cloudyQuote);
                    break;
                case "Fog":
                case "Mist":
                case "Freezing fog":
                    html.style.backgroundImage = 'url(/img/foggy-morning-1468348.jpg)';
                    quote.textContent = randomQuote(foggyQuote);
                    break;
                case "Cloudy":
                case "Overcast":
                    html.style.backgroundImage = 'url(/img/cloudy-scotland-1392069.jpg)';
                    quote.textContent = randomQuote(cloudyQuote);
                    break;
                case "Light rain":
                case "Patchy freezing drizzle possible":
                case  "Patchy light drizzle":
                case  "Light drizzle":
                case  "Patchy light rain":
                case  "Patchy rain possible":
                case  "Moderate rain at times":
                case "Moderate rain":
                case  "Heavy rain at times":
                case  "Heavy rain":
                case  "Light freezing rain":
                case  "Light rain shower":
                case  "Torrential rain shower":
                case  "Moderate or heavy rain shower":
                    html.style.backgroundImage = 'url(/img/rain-14884912.jpg)';
                    quote.textContent = randomQuote(rainyQuote);
                    break;
                case "Thundery outbreaks possible":
                case "Patchy light rain with thunder":
                case "Moderate or heavy rain with thunder":
                case "Patchy light snow with thunder":
                case "Moderate or heavy snow with thunder":
                    html.style.backgroundImage = 'url(/img/lightning-1186391.jpg)';
                    quote.textContent = randomQuote(lightningQuote);
                    break;
                case "Light snow showers" :
                case "Moderate or heavy snow showers" :
                case "Light showers of ice pellets" :
                case "Moderate or heavy showers of ice pellets":
                    html.style.backgroundImage = 'url(/img/trees-in-snow-1396854.jpg)';
                    quote.textContent = randomQuote(snowQuote);
                    break;
                default:
                html.style.backgroundImage = 'url(/img/sunny-hillside-1407934.jpg)';
                quote.textContent = randomQuote(sunnyQuote);
            }

            highLow.innerHTML =`Hi:${data.forecast.forecastday[0].day.maxtemp_f}<span>&#176;</span$>/Lo:${data.forecast.forecastday[0].day.mintemp_f}<span>&#176;</span>`;
            feelsLike.innerHTML =`<i class="fas fa-thermometer-full"></i> Feels Like: ${data.current.feelslike_f}<span>&#176;</span>`;
            windSpeed.innerHTML = `<i class="fas fa-wind"></i> Wind Speed: ${data.current.wind_mph} MPH`;
            windDirection.innerHTML = ` <i class="fas fa-compass"></i> Wind Direction: ${data.current.wind_dir}`;
            humidity.innerHTML = `<i class="fas fa-water"></i> Humidity: ${data.current.humidity}%`
            uv.innerHTML = `<i class="fas fa-sun"></i> UV Index: ${data.current.uv}`
        });
        if(zipRegex.test(zipCode.value) === true){
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${weatherbitKey}&units=I&days=8&&postal_code=${zipCode.value}&country=US`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        forecastDayCard1.innerHTML = `<p>${data.data[1].datetime}</p><img class="icon" src="/img/icons/${data.data[1].weather.icon}.png" alt="icon"><p>Hi:${data.data[1].max_temp}<span>&#176;</span>/Lo:${data.data[1].min_temp}<span>&#176;</span></p>`
        forecastDayCard2.innerHTML = `<p>${data.data[2].datetime}</p><img class="icon" src="/img/icons/${data.data[2].weather.icon}.png" alt="icon"><p>Hi:${data.data[2].max_temp}<span>&#176;</span>/Lo:${data.data[2].min_temp}<span>&#176;</span></p>`
        forecastDayCard3.innerHTML = `<p>${data.data[3].datetime}</p><img class="icon" src="/img/icons/${data.data[3].weather.icon}.png" alt="icon"><p>Hi:${data.data[3].max_temp}<span>&#176;</span>/Lo:${data.data[3].min_temp}<span>&#176;</span></p>`
        forecastDayCard4.innerHTML = `<p>${data.data[4].datetime}</p><img class="icon" src="/img/icons/${data.data[4].weather.icon}.png" alt="icon"><p>Hi:${data.data[4].max_temp}<span>&#176;</span>/Lo:${data.data[4].min_temp}<span>&#176;</span></p>`
        forecastDayCard5.innerHTML = `<p>${data.data[5].datetime}</p><img class="icon" src="/img/icons/${data.data[5].weather.icon}.png" alt="icon"><p>Hi:${data.data[5].max_temp}<span>&#176;</span>/Lo:${data.data[5].min_temp}<span>&#176;</span></p>`
        forecastDayCard6.innerHTML = `<p>${data.data[6].datetime}</p><img class="icon" src="/img/icons/${data.data[6].weather.icon}.png" alt="icon"><p>Hi:${data.data[6].max_temp}<span>&#176;</span>/Lo:${data.data[6].min_temp}<span>&#176;</span></p>`
        forecastDayCard7.innerHTML = `<p>${data.data[7].datetime}</p><img class="icon" src="/img/icons/${data.data[7].weather.icon}.png" alt="icon"><p>Hi:${data.data[7].max_temp}<span>&#176;</span>/Lo:${data.data[7].min_temp}<span>&#176;</span></p>`

    });
        }else{
            fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${weatherbitKey}&units=I&days=8&city=${zipCode.value}&country=US`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        forecastDayCard1.innerHTML = `<p>${data.data[1].datetime}</p><img class="icon" src="/img/icons/${data.data[1].weather.icon}.png" alt="icon"><p>Hi:${data.data[1].max_temp}<span>&#176;</span>/Lo:${data.data[1].min_temp}<span>&#176;</span></p>`
        forecastDayCard2.innerHTML = `<p>${data.data[2].datetime}</p><img class="icon" src="/img/icons/${data.data[2].weather.icon}.png" alt="icon"><p>Hi:${data.data[2].max_temp}<span>&#176;</span>/Lo:${data.data[2].min_temp}<span>&#176;</span></p>`
        forecastDayCard3.innerHTML = `<p>${data.data[3].datetime}</p><img class="icon" src="/img/icons/${data.data[3].weather.icon}.png" alt="icon"><p>Hi:${data.data[3].max_temp}<span>&#176;</span>/Lo:${data.data[3].min_temp}<span>&#176;</span></p>`
        forecastDayCard4.innerHTML = `<p>${data.data[4].datetime}</p><img class="icon" src="/img/icons/${data.data[4].weather.icon}.png" alt="icon"><p>Hi:${data.data[4].max_temp}<span>&#176;</span>/Lo:${data.data[4].min_temp}<span>&#176;</span></p>`
        forecastDayCard5.innerHTML = `<p>${data.data[5].datetime}</p><img class="icon" src="/img/icons/${data.data[5].weather.icon}.png" alt="icon"><p>Hi:${data.data[5].max_temp}<span>&#176;</span>/Lo:${data.data[5].min_temp}<span>&#176;</span></p>`
        forecastDayCard6.innerHTML = `<p>${data.data[6].datetime}</p><img class="icon" src="/img/icons/${data.data[6].weather.icon}.png" alt="icon"><p>Hi:${data.data[6].max_temp}<span>&#176;</span>/Lo:${data.data[6].min_temp}<span>&#176;</span></p>`
        forecastDayCard7.innerHTML = `<p>${data.data[7].datetime}</p><img class="icon" src="/img/icons/${data.data[7].weather.icon}.png" alt="icon"><p>Hi:${data.data[7].max_temp}<span>&#176;</span>/Lo:${data.data[7].min_temp}<span>&#176;</span></p>`
        zipCode.value="";
    });
        }

})



