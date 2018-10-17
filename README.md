# weatherapp
Make a request to a RESTfulAPI. And parse weather information from a Json file.

First I had problem with the webpage 
app.js:60 Mixed Content: The page at 'https://ashleynguci.github.io/weather-app/' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://api.openweathermap.org/data/2.5/weather?lat=60.4587&lon=22.3141&appid=8e1880f460a20463565be25bc573bdc6'. This request has been blocked; the content must be served over HTTPS.
weatherRequest @ app.js:60

I change 1 link from http to https. And error was fixed.

<img width="1277" alt="weatherapp" src="https://user-images.githubusercontent.com/40316179/47073640-640a5880-d201-11e8-9795-80fba503928d.png">

