

var button = document.querySelector('button')
button.addEventListener('click',function() {


fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={2ccf4e002e3b58010e13fc9303258cd3}")
  .then(response => response.json())
  .then(data => console.log(data))

  .catch(err => alert("Invalid entry, try again."))

})