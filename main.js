// Global Variable........................
let numInput=[];
let mathSign=[];
let inputArr =[];


// Event for capturing input 
let display = document.querySelector('.display');
let eventParent = document.querySelector('.inputParent');
eventParent.addEventListener('click',captureEvent)
function captureEvent(event){
  let input= event.target.innerHTML;
  inputArr.push(input);       
  display.innerHTML= inputArr.join('');
  if (event.target.className = "numInputsButtons"){
    numInput.push(event.target.innerHTML)
    console.log(numInput);
  }else {event.target.className = "MathOpButtons"
    mathSign.push(event.target.innerHTML);
    console.log(mathSign);}
  }



  calculation()


function calculation(input){



}


    






