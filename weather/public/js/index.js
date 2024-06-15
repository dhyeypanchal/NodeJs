let btn = document.getElementById("button")
let city = document.getElementById("city")
let cityname = document.getElementById("cityname")
let temp = document.getElementById("temp")

const fetchdata = async()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=846f6527e982ac07bded68d54e17a2e8`
    const request = await fetch(url)
    let data = await request.json()
    // console.log(data.main.temp);
    try {
        cityname.innerHTML = "Cityname: "+data.name;
        temp.innerHTML = "Temperature: "+data.main.temp;
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener('click',()=>{
    // alert("query done.")
    // console.log(city.value);
    fetchdata();
})