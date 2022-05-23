

var button = document.querySelector('.btn')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click',function() {


fetch("https://api.openweathermap.org/data/2.5/weather?q=+inputValue.value+&appid={2ccf4e002e3b58010e13fc9303258cd3}")
  .then(response => response.json())
  .then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
  })
  .catch(err => alert("Invalid entry, try again."))

})