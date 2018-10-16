window.onload= function(){
    //setNamee
var current =  new Date();
    var ipUrl = "https://ipinfo.io/json"
    var location = document.getElementById("city");
var degree = document.getElementById("weather");
var humi = document.getElementById("Humi1");
var wind = document.getElementById("wind1");
var feel = document.getElementById("feel1");
var status = document.getElementById("status");

    //calling ipinfo.io/json function
    httpRequest(ipUrl);
    //request to ipinfo.io/json
    function httpRequest(url, callback) {
        var httpReqIp = new XMLHttpRequest();
        httpReqIp.open("GET", url, true)
        httpReqIp.onreadystatechange = function() {
            if(httpReqIp.readyState == 4 && httpReqIp.status == 200) {
                var jsonIp = JSON.parse(httpReqIp.responseText)
                var ip = jsonIp.ip;
                var city = jsonIp.city;
                var country = jsonIp.country;
                location.innerHTML = `${city}, ${country}`;
            var lat = jsonIp.loc.split(",")[0];
                var lon = jsonIp.loc.split(",")[1];

                var weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8e1880f460a20463565be25bc573bdc6`;
                //calling openweathermap api function
                weatherRequest(weatherApi);

            }
        }
        httpReqIp.send();
    }

    function weatherRequest(url,callback){
        var httpWeather = new XMLHttpRequest();
        httpWeather.open("Get",url,true);
        httpWeather.onreadystatechange= function() {
            if(httpWeather.readyState == 4 && httpWeather.status == 200){
                var jsonWeather = JSON.parse(httpWeather.responseText);
                /*var sunSet = jsonWeather.sys.sunset;
                var timeNow = Math.round(current / 1000);
                console.log(timeNow + "<" + sunSet +" = "+(timeNow < sunSet))
                dayNight = (timeNow < sunSet) ? "day" : "night";*/
                var temp = Math.round(jsonWeather.main.temp - 273.15);
                degree.innerHTML = temp +'&#8451';
                humi.innerHTML = jsonWeather.main.humidity+"%";
                wind.innerHTML = jsonWeather.wind.speed +"mph";
                var desc = jsonWeather.weather[0].description;
                var id = jsonWeather.weather[0].id;
                status.innerHTML = `<i id="icon" class="wi wi-owm-${id}"></i><p>${desc}</p>`;




            }
    }
    httpWeather.send();
}

    var typed = new Typed('#type', {
    strings:["Ashleynguci","a web developer","happy to know you"],
    typeSpeed :120,
    backSpeed: 40,
    loop:true,
    showCursor: false,
  });

 function clock() {
const fullDate = new Date();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();
var year = fullDate.getFullYear();
var date = fullDate.getDate();
var month = Number(fullDate.getMonth())+1;
if (hours < 10){
    hours = "0" + hours;
}
if (mins < 10){
    mins = "0" + mins;
}
if (secs < 10){
    secs = "0" + secs;
}
document.getElementById('hour').innerHTML= hours + ":";
document.getElementById('minute').innerHTML= mins+":";
document.getElementById('second').innerHTML= secs;
document.getElementById('year').innerHTML= year;
document.getElementById('date').innerHTML= date+ ".";
document.getElementById('month').innerHTML= month+ ".";

}
setInterval(clock,50);


}

