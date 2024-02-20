var num1;
var num2;
var operator;
let display = document.querySelector('.display');

function add (num1,num2){
var result = num1 + num2;
return result;
}

add(2,2);

function subtract (num1,num2){
  var result = num1 - num2;
  return result;
}
subtract(2,2);

function multiply (num1,num2){
  var result = num1 * num2;
  return result;
}
multiply(2,4);

function divide (num1,num2){
  var result = num1 / num2;
  return result;
}
divide (16,8)


function operate (operator,num1,num2){
if (operator === "+"){
  var operation = add(num1,num2);
  console.log(operation);
  
}else if( operator === '-'){
  var operation = subtract(num1,num2);
  console.log(operation);
}else if( operator === '*'){
  var operation = multiply(num1,num2);
  console.log(operation);
 
}else if( operator === '/'){
  var operation = divide(num1,num2);
  console.log(operation);
}
}
operate('/',6,2);

var numbers = document.querySelector('.numberInput');
numbers.addEventListener('click', numClickInput);
function numClickInput (event){
let clickInput = event.target.textContent ;
display.textContent = clickInput; 
}

let mathSign = document.querySelector('.mathOpInput');
mathSign.addEventListener('click', mathClickInput );
function mathClickInput (event){
  let mathClick  = event.target.textContent;
  display.textContent = mathClick;
}

let ClearSign = document.querySelector('.clear');
ClearSign.addEventListener('click',clearClickInput);

function clearClickInput (event){
  let clearClick = event.target.textContent;
  display.textContent = clearClick;
}


let powerSign = document.querySelector('.power');
powerSign.addEventListener('click', );