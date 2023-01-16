
const API_URL = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={800d72f1dc813b86d0317e29dcbd8408}'

var button = document.querySelector('.btn')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click',function() {


fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={800d72f1dc813b86d0317e29dcbd8408}}")
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