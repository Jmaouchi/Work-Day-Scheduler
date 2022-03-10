var row = $('.row');
var array = []

// set local time using moment.js
var localTime = document.getElementById('currentDay');
var currentTime =  moment().format('d-MM-YYYY  h:mm:ss a');

localTime.innerHTML = currentTime;

// Change the color once the local hour will be equal to are hour data-time value;
var data = $('#hours').data('time');
console.log("The value is = " + data);
var hour = moment().hours(); 
for (i=0 ; i<row.length ; i++){
if(hour === data){
  var timer = $('#timer');
  $(timer).css('color', 'red');
}
}