
var display = document.querySelector('.display');

function calculation (){
  
  var inputArray = [];

  var numbers = document.querySelector('.numberInput');
numbers.addEventListener('click', numClickInput);
function numClickInput (event){
var clickInput = event.target.textContent ;
inputArray.push(clickInput);
var displayVal=display.textContent = inputArray.join(''); 
sortInput (displayVal);
}


var mathSign = document.querySelector('.mathOpInput');
mathSign.addEventListener('click', mathClickInput );
function mathClickInput (event){
  var mathClick  = event.target.textContent;
  inputArray.push(mathClick);
  var displayVal=display.textContent = inputArray.join(''); 
sortInput (displayVal);
  
}

var equalSign = document.querySelector('.equals');
equalSign.addEventListener('click',equalClickInput);
function equalClickInput(event){
var equalClick = event.target.textContent;
inputArray.push(equalClick);
var displayVal=display.textContent = inputArray.join(''); 
sortInput (displayVal);

}

var ClearSign = document.querySelector('.clear');
ClearSign.addEventListener('click',clearClickInput);

function clearClickInput (event){
  if (event.target.className = 'clear'){
inputArray.pop();
display.textContent = inputArray.join('');
}
}

var powerSign = document.querySelector('.power');
powerSign.addEventListener('click', powerInput);
function powerInput (event){
if (event.target.className = "power"){
  display.textContent = 0;
}}


  

function sortInput (displayVal){
var equalregex =  /=/;
  var operatorPattern = /[+\-x\/\=]/g;
  var operatorSearch =displayVal.search(operatorPattern);
  console.log(operatorSearch);
  var opMatch = displayVal.match(operatorPattern);
  console.log(opMatch);
 var operator = opMatch.pop();
  console.log(operator); 
  var num1str = displayVal.slice(0,operatorSearch);
  console.log('num1',num1);
  var num2str = displayVal.slice (operatorSearch+1);
  console.log('num2',num2);
  let equalOpSearch =  displayVal.search(equalregex) ;
  console.log('equal',equalOpSearch);
  let equalOp = displayVal.match(equalregex);
  console.log('equalop',equalOp);
  let equal = equalOp.pop();
  console.log(equal);
  var num1 = parseFloat(num1str);
  var num2 = parseFloat(num2str);
   operate(operator,num1,num2);
}

function add (num1,num2){
  var result = num1 + num2;
  return result;
  }
  
  add();
  
  function subtract (num1,num2){
    var result = num1 - num2;
    return result;
  }
  subtract();
  
  function multiply (num1,num2){
    var result = num1 * num2;
    return result;
  }
  multiply();
  
  function divide (num1,num2){
    var result = num1 / num2;
    return result;
  }
  divide ();

function operate (operator,num1,num2){
  if (operator === '+'){
    var operation = add(num1,num2);
    console.log('result',operation);
    display.textContent = operation;
    
  }else if( operator === '-'){
    var operation = subtract(num1,num2);
    console.log('result',operation);
    display.textContent = operation;

  }else if( operator === 'x'){
    var operation = multiply(num1,num2);
    console.log('result',operation);
    display.textContent = operation;
   
  }else if( operator === '/'){
    var operation = divide(num1,num2);
    console.log('result',operation);
    display.textContent = operation;
    
  }
  
  }

  

}

calculation();