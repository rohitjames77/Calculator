let display = document.querySelector(".display");
let numButtons = document.querySelectorAll(".numInputsButtons");
let clear = document.querySelector(".clear");
let power = document.querySelector(".power");
let equal = document.querySelector(".equals");
let mathButtons = document.querySelectorAll(".MathOpButtons");
let decimal = document.querySelector('.decimal');
let decCount = 0;
let previousResult= null;



function add(num1, num2) {
  var result = num1 + num2;
  return result;
}

// add(2, 3);

function subtract(num1, num2) {
  var result = num1 - num2;
  return result;
}
// subtract(6, 2);

function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}
// multiply(8, 8);

function divide(num1, num2) {
  var result = num1 / num2;
  return result;
}
// divide(4, 2);

// This code will iterate over each button in the numButtons array, and for each button, it will attach a click event listener.

numButtons.forEach(function(button){
  button.addEventListener('click',function(event)
  { display.textContent += event.target.textContent;
    let displayValue = display.textContent;
    if (displayValue.length > 15){
      display.textContent ='';
    }
    })
})


// This code will iterate over each button in the MathOpButtons array, and for each button, it will attach a click event listener.

mathButtons.forEach(function (button){
  button.addEventListener('click',function(event){
    display.textContent += event.target.textContent;
    let displayValue = display.textContent;
    if (displayValue.length > 15){
      display.textContent ='';
    }
   
    })
})
clear.addEventListener('click',function(){

  let displayValue = display.textContent;
 let trimDisplayValue=displayValue.trim();
let displayArr = trimDisplayValue.split('');

 for(let i = 0 ; i<displayArr.length; i++ ){
  displayArr.pop();
let displayStr = displayArr.toString();
let replacedDisplayStr = displayStr.replaceAll(',','');
display.textContent = replacedDisplayStr;
break;

 }
});

power.addEventListener('click',function (){
  display.textContent = '';
  location.reload();
})



// This code will attach a click event listener  to equal button...............
equal.addEventListener('click',function (event){
 let equalInput = event.target.textContent;
    display.textContent += equalInput;
    let displayValue = display.textContent;
    sortValues(displayValue);  
    decimalCheck (displayValue);
  })
// This code will attach a click event listener  to decimal button...............
let decimalCount = 0;
decimal.addEventListener('click', function (event){
 display.textContent += event.target.textContent;
})

function decimalCheck (displayValue){
  let decimalCheckRegex = /\.\./;
  if (decimalCheckRegex.test(displayValue)){
    alert("ERROR \n Double Decimal Present \n  ");
    display.textContent= "";

  }

}




function sortValues(displayValue){
displayValue = displayValue.trim();
let operatorSearchArr = ['+', '-', 'x', '/'];
for (let i = 0 ; i < displayValue.length; i++){
  if (displayValue.includes(operatorSearchArr[i])){
      let opIndex = displayValue.indexOf(operatorSearchArr[i]);
    let number1 = displayValue.slice(0,opIndex);
  let number2 = displayValue.slice(opIndex+1);
  let operator = displayValue.slice (opIndex,opIndex+1);
  convertType (number1,number2,operator);
  }
  
}

}

function convertType (number1,number2,operator){
  let num1 = parseFloat(number1);
  let num2 = parseFloat(number2);
  operate (operator,num1,num2);
  divideByZero (operator,num2);
  }


function divideByZero(operator,num2){
if (operator ==='/' && num2=== 0  ){
  alert("ERROR \n Cannot Continue Operation \n change Second Operand");
  display.textContent = '';
}
}


function operate (operator,num1,num2){
  if (operator === '+'){
    let result = add(num1,num2);
    display.textContent =  result;
  } else if (operator === '-'){
    let result = subtract(num1,num2);
    display.textContent =  result;
  } else if (operator === 'x'){
    let result = multiply(num1,num2);
    display.textContent =  result;
  } else if (operator === '/'){
    let result = divide(num1,num2);
    display.textContent =  result;
  }

}
