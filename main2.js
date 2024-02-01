


let display = document.querySelector('.display');
let eventParent1 = document.querySelector('.inputParent');
eventParent1.addEventListener('click',captureEvent1,updateDisplay)
function captureEvent1(event){
  let inputArr1 =[];
  let inputArr2=[];
  let input = event.target.textContent;
  if (event.target.className === "MathOpButtons"){
    inputArr2.push(input);
    console.log(inputArr2);
  }else {
    inputArr1.push(input);
    console.log(inputArr1);

  }
updateDisplay(input);   
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

updateDisplay()
}


operate();



function updateDisplay(input){
display.textContent= input;



}



