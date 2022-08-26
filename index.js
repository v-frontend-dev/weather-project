let weather = {
    "appkey": "34295248ab40732f3ceac0ab86038a31",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city +
            "&units=metric&appid="
            + this.appkey)
            .then((response) => response.json()).then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = " http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".wind").innerText="Speed :"+speed + "Km/hr";
        document.querySelector(".humidity").innerText= "Humidity :"+ humidity +"%";
        
       
    },
    search:function(){
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};
document.querySelector(".btn").addEventListener("click",function(){
weather.search();
});
document.querySelector(".searchbar").addEventListener("keyup",function(event){
if(event.key=="Enter"){
    weather.search();
}
});
