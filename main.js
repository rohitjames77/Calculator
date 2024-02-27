let display = document.querySelector(".display");
let numButtons = document.querySelectorAll(".numInputsButtons");
;
let clear = document.querySelector(".clear");
let power = document.querySelector(".power");
let equal = document.querySelector(".equals");
let mathButtons = document.querySelectorAll(".MathOpButtons");
let num1;
let num2;
let operator;


function add(num1, num2) {
  var result = num1 + num2;
  return result;
}

add(2, 3);

function subtract(num1, num2) {
  var result = num1 - num2;
  return result;
}
subtract(6, 2);

function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}
multiply(8, 8);

function divide(num1, num2) {
  var result = num1 / num2;
  return result;
}
divide(4, 2);

function operate (operator,num1,num2){
  if (operator === '+'){
    let result = add(num1,num2);
    console.log(result);
  } else if (operator === '-'){
    let result = subtract(num1,num2);
    console.log(result);
  } else if (operator === 'x'){
    let result = multiply(num1,num2);
    console.log(result);
  } else if (operator === '/'){
    let result = divide(num1,num2);
    console.log(result);
  }

}

operate('+',2,4);

// This code will iterate over each button in the numButtons array, and for each button, it will attach a click event listener.
numButtons.forEach(function(button){
  button.addEventListener('click',function(event)
  {  let numInput = event.target.textContent; 
  appendDisplay(numInput)  })
})


// This code will iterate over each button in the MathOpButtons array, and for each button, it will attach a click event listener.

mathButtons.forEach(function (button){
  button.addEventListener('click',function(event){
    let mathInput = event.target.textContent;
  appendDisplay(mathInput)})
})

function appendDisplay (numInput,mathInput,equalInput){
  let clickInput = display.textContent;
  

}


clear.addEventListener('click',function(){
display.textContent = '';
display.textContent = '0';
});

power.addEventListener('click',function (){
  display.textContent = '';
  display.textContent = '0';
})
// This code will attach a click event listener  to equal button...............
equal.addEventListener('click',function (event){
 let equalInput = event.target.textContent;
     appendDisplay(equalInput);
})
