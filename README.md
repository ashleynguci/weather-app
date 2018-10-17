# weatherapp
Make a request to a RESTfulAPI. And parse weather information from a Json file.

First I had problem with the webpage 
app.js:60 Mixed Content: The page at 'https://ashleynguci.github.io/weather-app/' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://api.openweathermap.org/data/2.5/weather?lat=60.4587&lon=22.3141&appid=8e1880f460a20463565be25bc573bdc6'. This request has been blocked; the content must be served over HTTPS.
weatherRequest @ app.js:60

I change 1 link from http to https. And error was fixed.

<img width="1280" alt="screen shot 2018-10-18 at 00 29 14" src="https://user-images.githubusercontent.com/40316179/47117434-fd228900-d26c-11e8-9e15-79fd8cb2f610.png">


