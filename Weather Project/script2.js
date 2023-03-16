window.addEventListener("DOMContentLoaded", () => {

    let logout = document.getElementById("logout")
    logout.addEventListener("click", () => {

        window.location = "index.html"
    })



    let temp = document.getElementById("temp")
    let weathercondition = document.getElementById("weathercondition")
    let city = document.getElementById("city")
    let country = document.getElementById("country")
    let feels_like = document.getElementById("feels_like")
    let humidity = document.getElementById("humidity")
    let infoText = document.getElementById("infoText")
    let icon = document.getElementById("img")


    let temp1 = document.getElementById("temp1")
    let weathercondition1 = document.getElementById("weathercondition1")
    let city1 = document.getElementById("city1")
    let country1 = document.getElementById("country1")
    let feels_like1 = document.getElementById("feels_like1")
    let humidity1 = document.getElementById("humidity1")
    let infoText1 = document.getElementById("infoText1")
    let icon1 = document.getElementById("img1")


    let temp2 = document.getElementById("temp2")
    let weathercondition2 = document.getElementById("weathercondition2")
    let city2 = document.getElementById("city2")
    let country2 = document.getElementById("country2")
    let feels_like2 = document.getElementById("feels_like2")
    let humidity2 = document.getElementById("humidity2")
    let infoText2 = document.getElementById("infoText2")
    let icon2 = document.getElementById("img2")


    let api;




    // for search bar dynamics
    let search = document.getElementById("search")
    search.classList.add("inv")
    let mag = document.getElementById("mag")
    mag.addEventListener("click", () => {
        search.classList.remove("inv")
    })




    let currentloc = document.getElementById("currentloc")
    currentloc.addEventListener("click",()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success,error)
        }
        else{
            alert("Your System Does Not Support Geolocation API")
        }
    })

    function success(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=23f88dd19a408b48dc54ac3d48402709`
        fetchApi()
    }

    function error(error){
        infoText.innerHTML = error.message
        infoText1.innerHTML = error.message
        infoText2.innerHTML = error.message

    }



    search.addEventListener("keyup",e=>{
        if(e.key == "Enter" && search.value !== ""){
            requestApi(search.value)
        }
    })


    function requestApi(city) {
        api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=23f88dd19a408b48dc54ac3d48402709`;
        fetchApi() 
         
    }


    function fetchApi(){
        infoText.innerHTML = "Getting Details"
        infoText1.innerHTML = "Getting Details"
        infoText2.innerHTML = "Getting Details"

        fetch(api).then(response=>response.json()).then(data => weatherData(data)).catch(()=>{
            infoText.innerHTML = "Some Error Occured";
            infoText1.innerHTML = "Some Error Occured";
            infoText2.innerHTML = "Some Error Occured";
        });
    }


    function weatherData(data){
        if(data.cod == "404"){
            console.log("reached")
            infoText.innerHTML = `Can't find the data for ${search.value}. Please provide a valid city name`
            infoText1.innerHTML = `Can't find the data for ${search.value}. Please provide a valid city name`
            infoText2.innerHTML = `Can't find the data for ${search.value}. Please provide a valid city name`
        }
        else{
   
            // console.log(data)

            temp.innerHTML = `${Math.floor(data.main.temp +273.15)} K`
            weathercondition.innerHTML = data.weather[0].description
            city.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`
            country.innerHTML = data.sys.country
            feels_like.innerHTML = `${Math.floor(data.main.feels_like + 273.15)} K`
            humidity.innerHTML = `${data.main.humidity}%`

            temp1.innerHTML = `${Math.floor(data.main.temp)} &#8451`
            weathercondition1.innerHTML = data.weather[0].description
            city1.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`
            country1.innerHTML = data.sys.country
            feels_like1.innerHTML = `${Math.floor(data.main.feels_like)} &#8451`
            humidity1.innerHTML = `${data.main.humidity}%`

            temp2.innerHTML = `${Math.floor((data.main.temp *(9/5))+32)} &#8457`
            weathercondition2.innerHTML = data.weather[0].description
            city2.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`
            country2.innerHTML = data.sys.country
            feels_like2.innerHTML = `${Math.floor((data.main.feels_like * (9/5))+32)} &#8457`
            humidity2.innerHTML = `${data.main.humidity}%`


            if(data.weather[0].id == 800){
                icon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
                icon1.innerHTML = `<i class="fa-solid fa-sun"></i>`;
                icon2.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            }else if(data.weather[0].id >= 200 && data.weather[0].id <= 232){
                icon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;  
                icon1.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;  
                icon2.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;  
            }else if(data.weather[0].id >= 600 && data.weather[0].id <= 622){
                icon.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
                icon1.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
                icon2.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            }else if(data.weather[0].id >= 701 && data.weather[0].id <= 781){
                icon.innerHTML = `<i class="fa-solid fa-smog"></i>`;
                icon1.innerHTML = `<i class="fa-solid fa-smog"></i>`;
                icon2.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            }else if(data.weather[0].id >= 801 && data.weather[0].id <= 804){
                icon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
                icon1.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
                icon2.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
            }else if((data.weather[0].id >= 500 && data.weather[0].id <= 531) || (data.weather[0].id >= 300 && data.weather[0].id <= 321)){
                icon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
                icon1.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
                icon2.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }

            search.value =""
            infoText.innerHTML = ""
            infoText1.innerHTML = ""
            infoText2.innerHTML = ""


            
        }
    }











})


