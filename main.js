let display = document.querySelector(".display");
let numButtons = document.querySelectorAll(".numInputsButtons");
let clear = document.querySelector(".clear");
let power = document.querySelector(".power");
let equal = document.querySelector(".equals");
let mathButtons = document.querySelectorAll(".MathOpButtons");
let decimal = document.querySelector('.decimal');
let decCount = 0;



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



// operate('+',2,4);

// This code will iterate over each button in the numButtons array, and for each button, it will attach a click event listener.
numButtons.forEach(function(button){
  button.addEventListener('click',function(event)
  {  display.textContent += event.target.textContent; 
    let displayValue = display.textContent;
    sortValues(displayValue);
    
    })
})


// This code will iterate over each button in the MathOpButtons array, and for each button, it will attach a click event listener.

mathButtons.forEach(function (button){
  button.addEventListener('click',function(event){
    display.textContent += event.target.textContent;
    let displayValue = display.textContent;
    sortValues(displayValue);
  })
})

clear.addEventListener('click',function(){
display.textContent = '';
display.textContent = '0'; 
let displayValue = display.textContent;
console.log(displayValue);

});

power.addEventListener('click',function (){
  display.textContent = '';
  display.textContent = '0';
  let displayValue = display.textContent;
  console.log(displayValue);
 
})
// This code will attach a click event listener  to equal button...............
equal.addEventListener('click',function (event){
 let equalInput = event.target.textContent;
    display.textContent += equalInput;
   
   
  })
// This code will attach a click event listener  to decimal button...............

decimal.addEventListener('click', function (event){
 display.textContent += event.target.textContent;
 decCount++;
 console.log('count',decCount);
 let displayValue = display.textContent;
 sortValues(displayValue)
})

function sortValues(displayValue){
displayValue = displayValue.trim();
let operatorSearchArr = ['+', '-', 'x', '/'];
for (let i = 0 ; i < displayValue.length; i++){
  if (displayValue.includes(operatorSearchArr[i])){
      let opIndex = displayValue.indexOf(operatorSearchArr[i]);
    console.log('index',opIndex);
    let number1 = displayValue.slice(0,opIndex);
    console.log('num1',number1);
  let number2 = displayValue.slice(opIndex+1);
  console.log('num2',number2);
  let operator = displayValue.slice (opIndex,opIndex+1);
  console.log( typeof operator); 
  convertType (number1,number2,operator);
  }
}

}

function convertType (number1,number2,operator){
  let num1 = parseFloat(number1);
  console.log('num1', num1);
  let num2 = parseFloat(number2);
  console.log('num2',num2);
  // operate (operator,num1,num2);

  // if (operator === '+'){
  //   // let result = add(num1,num2);
  //   let result = num1 + num2;
  //   console.log(result);
  //   display.textContent =  result;
  // }

}

// function callOperate (){

// }

// function operate (operator,num1,num2){
//   if (operator === '+'){
//     let result = add(num1,num2);
//     console.log(result);
//     display.textContent =  result;
//   } else if (operator === '-'){
//     let result = subtract(num1,num2);
//     console.log(result);
//     display.textContent =  result;
//   } else if (operator === 'x'){
//     let result = multiply(num1,num2);
//     console.log(result);
//     display.textContent =  result;
//   } else if (operator === '/'){
//     let result = divide(num1,num2);
//     console.log(result);
//     display.textContent =  result;
//   }
// }