var num1;
var num2;
var operator;








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