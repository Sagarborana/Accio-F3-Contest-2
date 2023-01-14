const mapsrc = document.getElementById("mapframe");

function getData(){
    navigator.geolocation.getCurrentPosition((data)=>{
      let {latitude,longitude} =data.coords;
      document.getElementById("lat").innerHTML= latitude
      document.getElementById("long").innerHTML= longitude
      mapsrc.src = `https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`
      latitude.innerHTML = latitude;
      longitude.innerHTML = longitude;
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bea8b814e58a243622951bee15bbf797`

      fetch(url).then(res=> res.json()).then(data=>{
        showData(data)
      })
    })
  }
  function showData(data) {
        document.getElementById("latitude").innerHTML = `${data.coord.lat}`
        document.getElementById("longitude").innerHTML = `${data.coord.lon}`
        document.getElementById("Time_Zone").innerHTML = `${data.timezone}`
        document.getElementById("Wind_speed").innerHTML =`${data.wind.speed}`
        document.getElementById("pressure").innerHTML = `${data.main.pressure}`
        document.getElementById("Humidity").innerHTML = `${data.main.humidity}`;
        document.getElementById("Wind_Direction").innerHTML =`${data.wind.speed}`;
        document.getElementById("Temp").innerHTML = `${data.main.temp}`
        document.getElementById("Feels_like").innerHTML = `${data.main.feels_like}`
  }
  
   
  
  
  let button = document.getElementById("btn");
  button.onclick = getData()