


let rawInputArr = [];
let display = document.querySelector('.display');  
let eventParent1 = document.querySelector('.inputParent');
eventParent1.addEventListener('click',captureEvent1)
function captureEvent1(event){
  let input = event.target.textContent;  
     rawInputArr.push(input);
     let inputArr=rawInputArr.join('');
     display.textContent = inputArr;
     getSignOp(inputArr);
        }
     
    function getSignOp(inputArr) {
      let operatorSearchArr = ['+', '-', 'x', '/'];
      for (let i =0; i< inputArr.length;i++){
        if(inputArr.includes(operatorSearchArr[i])){
          display.textContent ='';
          console.log('at index No '+ inputArr.indexOf(operatorSearchArr[i]));
          let opIndex = inputArr.indexOf(operatorSearchArr[i]);
          let opSign = inputArr.slice(opIndex,opIndex+1);
          console.log(opSign);
          let opSignIndex = inputArr.indexOf(opSign);
          getNum1And2(inputArr,opSignIndex);
          break;
        }
        
      }
    }

    function getNum1And2(inputArr,opSignIndex){
    let num1 = inputArr.slice(0, opSignIndex);
    let num2 = inputArr.slice(opSignIndex + 1 );
    console.log('Number 1:', num1);
    console.log('Number 2:', num2);  
   
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




