var container = document.querySelectorAll('.container');
var inputCol = $('input');
var array = []
var attrSet = 23;

// set local time using moment.js
var localTime = document.getElementById('currentDay');
var currentTime =  moment().format('MM-DD-YYYY  h:mm:ss a');

localTime.innerHTML = currentTime;

// Change the color once the local hour will be equal to are hour data-time value;
var currentHour = moment().hours(); 
var currentDay = moment().date();
console.log(`current day: ${currentDay}`);
console.log(`current_hour: ${currentHour}`);

  $(".time-block").each(function() {
  var timeBlock = parseInt($(this).attr('data-time')).valueOf();
    console.log(`time_block: ${timeBlock}`);
    var currentInputElement = $(this).children()[1];;
    console.log(`children: ${currentInputElement}`);

  if(currentHour === timeBlock ){

    currentInputElement.classList.add("present");

  }else if(currentHour > timeBlock){

    currentInputElement.classList.add("past");
   
  }else if (currentHour < timeBlock){

    currentInputElement.classList.add("future");

      }
    })
  
