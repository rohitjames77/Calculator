


let display = document.querySelector('.display');
let eventParent1 = document.querySelector('.inputParent');
eventParent1.addEventListener('click',captureEvent1)
function captureEvent1(event){
  let input = event.target.textContent;
     updateDisplay(input);   
  }
  
  let inputArr = [];
function updateDisplay(input){ 
  inputArr.push(input);       
  display.textContent = inputArr.join('');
  console.log(inputArr);

sortInput(inputArr);
}

function sortInput(inputArr){







  // operate(num1,num2,opSign);
}





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




