var num1;
var num2;
var operator;
let display = document.querySelector('.display');

function calculation (){
  
  let inputArray = [];

  var numbers = document.querySelector('.numberInput');
numbers.addEventListener('click', numClickInput);
function numClickInput (event){
let clickInput = event.target.textContent ;
inputArray.push(clickInput);
let displayVal=display.textContent = inputArray.join(''); 
sortInput (displayVal);
}


let mathSign = document.querySelector('.mathOpInput');
mathSign.addEventListener('click', mathClickInput );
function mathClickInput (event){
  let mathClick  = event.target.textContent;
  inputArray.push(mathClick);
  let displayVal=display.textContent = inputArray.join(''); 
sortInput (displayVal);
  
}

let equalSign = document.querySelector('.equals');
equalSign.addEventListener('click',equalClickInput);
function equalClickInput(event){
let equalClick = event.target.textContent;
inputArray.push(equalClick);
let displayVal=display.textContent = inputArray.join(''); 
sortInput (displayVal);

}

let ClearSign = document.querySelector('.clear');
ClearSign.addEventListener('click',clearClickInput);

function clearClickInput (event){
  if (event.target.className = 'clear'){
inputArray.pop();
display.textContent = inputArray.join('');
}
}

let powerSign = document.querySelector('.power');
powerSign.addEventListener('click', powerInput);
function powerInput (event){
if (event.target.className = "power"){
  display.textContent = 0;
}}


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
  divide (16,8);

  

function sortInput (displayVal){

  let operatorPattern = /[+\-*\/]/g;
  if (displayVal.match(operatorPattern)){
   

  }




}








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
//  operate('+',7,2)
  

}

calculation();