const london = document.getElementById('london');
let lon;
let lat;
fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=be41a977f3f07ed1061b1cde1098c3a7")
    .then(response => response.json())
    .then(data=> console.log(data))
    .catch(err=> alert('no data for this city'));

