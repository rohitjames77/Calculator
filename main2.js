


let display = document.querySelector('.display');
let eventParent1 = document.querySelector('.inputParent');
eventParent1.addEventListener('click',captureEvent1)
function captureEvent1(event){
  let input = event.target.textContent;
     updateDisplay(input);   
  }
  
  let inputArr = [];

 //populate display Div with  
function updateDisplay(input){ 
  inputArr.push(input);       
  display.textContent = inputArr.join('');
  console.log(inputArr);

sortInput(inputArr);
}

function sortInput(inputArr){
  let opIndex= inputArr.findIndex(element =>['+','-','x','/'].includes(element));
  
  if (opIndex !== -1){
     let num1 = inputArr.slice(0,opIndex).join('');
     console.log(num1);
     let num2 = inputArr.slice(opIndex +1,-1).join('');
     console.log(num2);

     let opSign = inputArr[opIndex];
     console.log(opSign);

  }






  // operate(num1,num2,opSign);
}





// function operate (num1,num2,opSign){
// if (opSign === "+"){
//   let result = num1 + num2;
//   console.log(result);
// }else if (opSign === "-"){
//   let result = num1 - num2;
//   console.log(result);
// }else if (opSign === "/"){
//   let result = num1/num2;
//   console.log(result);
// }else if (opSign==='*'){
//   let result = num1*num2;
//   console.log(result);
// }

// }




