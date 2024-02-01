
let inputarr1 =[];
let inputarr2=[];


let display = document.querySelector('.display');
let eventParent1 = document.querySelector('.inputParent');
eventParent1.addEventListener('click',captureEvent1)
function captureEvent1(event){
  let eventresponse; 
  let input = event.target.textContent;
  if (event.target.className === "MathOpButtons"){
    inputarr2.push(input);
    console.log(inputarr2);
  }else {
    inputarr1.push(input);
    console.log(inputarr1);

  }
   
  }
   
let num1;
let num2;
let opSign;

  
function operate (num1,num2,opSign){
if (opSign === "+"){
  let result = num1 + num2;
  console.log(result);
}else if (opSign === "-"){
  let result = num1 - num2;
  console.log(result);
}else if (opSign === "/"){
  let result = num1/num2;
  console.log(result);
}else if (opSign==='*'){
  let result = num1*num2;
  console.log(result);
}
}


operate(2,5,"+");



