var container = document.querySelectorAll('.container');
var inputCol = $('input');
var day = 12;
// var textEventOne = $('#one');

// set local time using moment.js
var localTime = $('#currentDay').text();
var localTime =document.getElementById('currentDay');
var currentTime =  moment().format('MM-DD-YYYY  h:mm:ss a');

localTime.innerHTML = currentTime;

// Change the color once the local hour will be equal to are hour data-time value;
var currentHour = moment().hours(); 
var currentDay = moment().date();
  console.log(`current day: ${currentDay}`);
  console.log(`current_hour: ${currentHour}`);

// looping through every element that has an className of time-block, and execute the code insde the function 
$(".time-block").each(function() {
  var timeBlock = parseInt($(this).attr('data-time')).valueOf();
    console.log(`time_block: ${timeBlock}`);
    // selected the element we want to effect with this function, with adding a this keyWord and .children to get the specific childElement 
    var currentInputElement = $(this).children()[1];;
    console.log(`children: ${currentInputElement}`);

  if(currentHour === timeBlock ){

    currentInputElement.classList.add("present");
    // change the color of the text to yellow if its in the present 
    currentInputElement.style.color = 'yellow';

  }else if(currentHour > timeBlock){

    currentInputElement.classList.add("past");
     // change the color of the text to red if its in the past 
    currentInputElement.style.color = 'red';

  }else if (currentHour < timeBlock){

    currentInputElement.classList.add("future");

    }
  })



     //saved first input to localStorage
    var getValueOne = function(){
    var valueOne =  localStorage.getItem('one');
      console.log(` valusOne: ${valueOne}`);
      document.getElementById('one').textContent = valueOne;
    }

    getValueOne();

    function setValueOne (){ 
      // get the value of the textarea
      // var value = $(textEventOne).val();
      var idValue = $('#one');
      var valueOne = $(idValue).val();
      console.log(`value: ${valueOne}`);
      // set value One to local storage
      localStorage.setItem('one', valueOne);
      // we can add this to  clear the inputFiled, but in this case we want to leave the text showing
      // $(idValue).val('') = '';
    }



    //saved second input to localStorage
    var getValueTwo = function(){
      var valueTwo = localStorage.getItem('two');
      console.log(`value-two: ${valueTwo}`);
      document.getElementById('two').textContent = valueTwo;

    }
    getValueTwo()

    function setValueTwo (){
      // get the value of the second textarea with setting the 
      var idValue = $('#two');
      var valueTwo = $(idValue).val();
      console.log(`valueTwo: ${valueTwo}`);
        // set value Two to local storage
      localStorage.setItem('two', valueTwo);
    }
    
    


    //saved Third input to localStorage
    var getValueThree = function(){
      var valueThreeText = $('#three');
      console.log(`valueThreText: ${valueThreeText}`);
      var valueThree = localStorage.getItem('three');
      console.log(`value-Three: ${valueThree}`);
      document.getElementById('three').textContent = valueThree;
    
    }
      getValueThree()
    
    function setValueThree (){
      // get the value of the third textarea with setting the 
     var idValue = $('#three');
        var valueThree = $(idValue).val();
          console.log(`valueThree: ${valueThree}`);
          localStorage.setItem('three', valueThree);
    }



    //saved fourth input to localStorage
    var getValueFour = function(){
      var valueThreeText = $('#four');
      console.log(`valueThreText: ${valueThreeText}`);
      var valueFour = localStorage.getItem('four');
      console.log(`value-four: ${valueFour}`);
      document.getElementById('four').textContent = valueFour;
    
    }
      getValueFour()
    
      function setValueFour (){
        // get the value of the third textarea with setting the 
      var idValue = $('#three');
      var valueFour = $(idValue).val();
          console.log(`valueFour: ${valueFour}`);
      localStorage.setItem('four', valueFour);
      }

      

      //saved fifth input to localStorage
      var getValueFour = function(){
        var valueFiveText = $('#five');
        console.log(`valueThreText: ${valueFiveText}`);
        var valueFive = localStorage.getItem('five');
        console.log(`value-five: ${valueFive}`);
        document.getElementById('five').textContent = valueFive;
      
      }
        getValueFour()
      
        function setValueFive (){
          // get the value of the third textarea with setting the 
        var idValue = $('#five');
        var valueFive = $(idValue).val();
            console.log(`valueFive: ${valueFive}`);
        localStorage.setItem('five', valueFive);
      }



      //saved 6th input to localStorag
      var getValueSix = function(){
        var valueSixText = $('#five');
        console.log(`valueSixText: ${valueSixText}`);
        var valueSix = localStorage.getItem('six');
        console.log(`value-six: ${valueSix}`);
        document.getElementById('six').textContent = valueSix;
      
      }
        getValueSix()
      
        function setValueSix (){
          // get the value of the third textarea with setting the 
        var idValue = $('#six');
        var valueSix = $(idValue).val();
            console.log(`valueSix: ${valueSix}`);
        localStorage.setItem('six', valueSix);
      }




      //saved 7th input to localStorag
      var getValueSeven = function(){
        var valueSevenText = $('#seven');
        console.log(`valueSevenText: ${valueSevenText}`);
        var valueSeven = localStorage.getItem('seven');
        console.log(`value-Seven: ${valueSeven}`);
        document.getElementById('seven').textContent = valueSeven;
      
      }
        getValueSeven()
      
        function setValueSeven (){
          // get the value of the third textarea with setting the 
        var idValue = $('#seven');
        var valueSeven = $(idValue).val();
            console.log(`valueSeven: ${valueSeven}`);
        localStorage.setItem('seven', valueSeven);
      }


      //saved 8th input to localStorag
      var getValueEight = function(){
        var valueEightText = $('#eight');
        console.log(`valueEightText: ${valueEightText}`);
        var valueEight = localStorage.getItem('eight');
        console.log(`value-Eight: ${valueEight}`);
        document.getElementById('eight').textContent = valueEight;
      
      }
        getValueEight()
      
        function setValueEight (){
        // get the value of the third textarea with setting the 
        var idValue = $('#eight');
        var valueEight = $(idValue).val();
            console.log(`valueEight: ${valueEight}`);
        localStorage.setItem('eight', valueEight);
      }


      //saved 9th input to localStorag
      var getValueNine = function(){
        var valueNineText = $('#nine');
        console.log(`valueNineText: ${valueNineText}`);
        var valueNine = localStorage.getItem('nine');
        console.log(`value-Nine: ${valueNine}`);
        document.getElementById('nine').textContent = valueNine;
      
      }
        getValueNine()
      
        function setValueNine (){
        // get the value of the third textarea with setting the 
        var idValue = $('#nine');
        var valueNine = $(idValue).val();
            console.log(`valueNine: ${valueNine}`);
        localStorage.setItem('nine', valueNine);
      }





    $('.saveBtnOne').on('click', setValueOne)
    $('.saveBtnTwo').on('click', setValueTwo)
    $('.saveBtnThree').on('click', setValueThree)
    $('.saveBtnFour').on('click', setValueFour)
    $('.saveBtnFive').on('click', setValueFive)
    $('.saveBtnSix').on('click', setValueSix)
    $('.saveBtnSeven').on('click', setValueSeven)
    $('.saveBtnEight').on('click', setValueEight)
    $('.saveBtnNine').on('click', setValueNine)