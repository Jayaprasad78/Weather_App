const apiKey="e87591977f7da982b260a24c35d6c937";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&";

const searchbox=document.querySelector(".search input");
const serachbtn=document.querySelector(".search button");
const weathericon=document.querySelector('.weather-icon')
async function checkWeather(city)
{
    const response = await fetch(apiUrl + "q=" + city + "&appid=" + apiKey);
    var data= await response.json();

    if(response.status ==404)
    {
        document.querySelector('.error').style.display = 'block';
        document.querySelector(".Weather").style.display="none";

    }
    else
    {
        console.log(data)

    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity +"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/hr";
    console.log(data.weather[0].main)

     if(data.weather[0].main=="Clouds")
     {
        weathericon.src="images/clouds.png";
     }
     else if(data.weather[0].main=="Clear")
     {
        weathericon.src="images/clear.png";
     }
     else if(data.weather[0].main=="Rain")
     {
        weathericon.src="images/rain.png";
     }
     else if(data.weather[0].main=="Drizzle")
     {
        weathericon.src="images/drizzle.png";
     }
     else if(data.weather[0].main=="Mist")
     {
        weathericon.src="images/mist.png";
     }
     else if(data.weather[0].main=="Snow")
     {
        weathericon.src="images/snow.png";
     }

     else
     {
        weathericon.src="images/clouds.png";
     }
     

     document.querySelector(".Weather").style.display="block";
     document.querySelector('.error').style.display = 'none';

    }
    




}


serachbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);

})

var icon = document.getElementById("icon");
var body = document.body;

icon.onclick = function() {

   body.classList.toggle("white-theme");
   if(body.classList.contains("white-theme"))
   {
      icon.src="images/sun.png";
   }
   else
   {
      icon.src="images/moon.png";
   }
};


const rotatingButton = document.getElementById('rotating-button');
const colorOptions = document.getElementById('color-options');
const card = document.getElementById('card');

rotatingButton.addEventListener('click', () => {
  colorOptions.classList.toggle('open');
});

colorOptions.addEventListener('click', (event) => {
  if (event.target.classList.contains('color-option')) {
    const selectedColor = event.target.getAttribute('data-color');
    card.style.color = selectedColor;
  }
});