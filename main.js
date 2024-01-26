// Global Variable........................
let numInput=[];
let mathSign=[];
let inputArr =[];


// Event for capturing input from numberInput Div............................ 

let display = document.querySelector('.display');
let eventParent1 = document.querySelector('.numberInput');
eventParent1.addEventListener('click',captureEvent1)
function captureEvent1(event){
  if (event.target.className === "numInputsButtons"){
  let input1= event.target.textContent ;
  inputArr.push(input1);       
  display.textContent = inputArr.join('');
  event.stopPropagation();
  console.log(inputArr);


  collectInput();
  }
  }
// Event for capturing input from mathOpInput Div............................
  let eventParent2 = document.querySelector('.mathOpInput');
  eventParent2.addEventListener('click',captureEvent2)
  function captureEvent2(event){
    if (event.target.className === "MathOpButtons"){
    let input2= event.target.textContent ;
    mathSign.push(input2);       
    console.log(mathSign);
    }

    // collectInput();
    }

  function collectInput (inputArr,mathSign){
    console.log(inputArr);
    console.log(mathSign);

  }




    






