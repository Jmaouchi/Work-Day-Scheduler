var row = $('.row');
var array = []

// set local time using moment.js
var localTime = document.getElementById('currentDay');
var currentTime =  moment().format('d-MM-YYYY  h:mm:ss a');

localTime.innerHTML = currentTime;
