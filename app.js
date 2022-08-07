const london = document.getElementById('london');
const temp = document.getElementById('temp-val');
const city = document.getElementById('city-input');
const cityName = document.getElementById('city');
const country = document.getElementById('country');
const description = document.getElementById('desc');
const button = document.getElementById('button');
console.log(city['value'])

city.addEventListener("keypress", event=>{
    if (event.key=== "Enter"){
        console.log("Enter");
        button.click();
    }

})

button.addEventListener('click', () => {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+city['value']+"&limit=5&appid=be41a977f3f07ed1061b1cde1098c3a7")
    .then(response => response.json())
    .then(data => {
        let lon = data[0]['lon'];
        let lat = data[0]['lat'];
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=be41a977f3f07ed1061b1cde1098c3a7")
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                let tempValue = Math.floor(data['main']['temp'] -273.15);
                let cityValue = city['value'];
                let countryValue = data['sys']['country']
                let descValue = data['weather'][0]['description'];

                
                
                country.innerHTML=("<p>"+countryValue+"</p>")
                temp.innerHTML=("<p>"+tempValue+"</p>");
                description.innerHTML=("<p>"+descValue+"</p>");
                cityName.innerHTML=("<p>"+cityValue+"</p>")

            })
            .catch(err=>alert('no data for this city'))
    })
    .catch(err=> alert('no data for this city'));
})
fetch("http://api.openweathermap.org/geo/1.0/direct?q="+city['value']+"&limit=5&appid=be41a977f3f07ed1061b1cde1098c3a7")
    .then(response => response.json())
    .then(data => {
        let lon = data[0]['lon'];
        let lat = data[0]['lat'];
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=be41a977f3f07ed1061b1cde1098c3a7")
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                let tempValue = Math.floor(data['main']['temp'] -273.15);
                let cityValue = city['value'];
                let countryValue = data['sys']['country']
                let descValue = data['weather'][0]['description'];

                
                
                country.innerHTML=("<p>"+countryValue+"</p>")
                temp.innerHTML=("<p>"+tempValue+"</p>");
                description.innerHTML=("<p>"+descValue+"</p>");
                cityName.innerHTML=("<p>"+cityValue+"</p>")

            })
            .catch(err=>alert('no data for this city'))
    })
    .catch(err=> alert('no data for this city'));



