var container = document.querySelectorAll('.container');
var inputCol = $('input');
var textEvent = $('#one');
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

    //first saved input to localStorage
    var getValueOne = function(){
    var valueLs =  localStorage.getItem('one');
      console.log(` valusLS: ${valueLs}`);
      document.getElementById('one').textContent = valueLs;
    }

    getValueOne();

    function setValueOne (){ 
      // get the value of the textarea
      var value = $(textEvent).val();
      console.log(`value: ${value}`);

      localStorage.setItem('one', value);
    }


    //second saved input to localStorage


    $('.saveBtnOne').on('click', setValueOne)
    // $('.saveBtnTwo').on('click', setValueTwo)
    // $('.saveBtnThree').on('click', setValueTwo)
    // $('.saveBtnFour').on('click', setValueOne)
    // $('.saveBtnFive').on('click', setValueOne)
    // $('.saveBtnSix').on('click', setValueOne)
    // $('.saveBtnSeven').on('click', setValueOne)
    // $('.saveBtnEight').on('click', setValueOne)
    // $('.saveBtnNine').on('click', setValueOne)