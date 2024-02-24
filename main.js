
let display = document.querySelector('.display');
let numButtons = document.querySelectorAll('.numInputsButtons');  
console.log(numButtons);
let clear = document.querySelector('.clear');
let power = document.querySelector('.power');
let equal = document.querySelector('.equals');
let mathButtons = document.querySelector('.MathOpButtons');
let clickInput = display.textContent;
clickInput = '';




function add (num1,num2){
  var result = num1 + num2;
  return result;
  }
  
  add(2,3);
  
  function subtract (num1,num2){
    var result = num1 - num2;
    return result;
  }
  subtract(6,2);
  
  function multiply (num1,num2){
    var result = num1 * num2;
    return result;
  }
  multiply(8,8);
  
  function divide (num1,num2){
    var result = num1 / num2;
    return result;
  }
  divide (4,2);

numButtons.forEach(applyEvent);

function applyEvent(numButtons){
  numButtons.addEventListener('click',(e)=>{
  });
}
  