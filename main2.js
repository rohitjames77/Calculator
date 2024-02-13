let rawInputArr = [];
let opSign;
let input;

let display = document.querySelector('.display');  
let eventParent1 = document.querySelector('.inputParent');
eventParent1.addEventListener('click',captureEvent1)

function captureEvent1(event){
  let input = event.target.textContent;  
    rawInputArr.push(input);
     let inputArr=rawInputArr.join('');
     display.textContent = inputArr;
  
  getSignOp(inputArr);
       
         function getSignOp(inputArr) {
      let operatorSearchArr = ['+', '-', 'x', '/'];
      for (let i = 0; i< inputArr.length;i++){
        if(inputArr.includes(operatorSearchArr[i])){
          // display.textContent = '';
          console.log('at index No '+ inputArr.indexOf(operatorSearchArr[i]));
          let opIndex = inputArr.indexOf(operatorSearchArr[i]);
          let opSign = inputArr.slice(opIndex,opIndex+1);
          console.log(opSign);
          let opSignIndex = inputArr.indexOf(opSign);
          let num1 = inputArr.slice(0, opSignIndex);
               let num2 = inputArr.slice(opSignIndex + 1 );
               console.log('Number 2:', num2);  
               console.log('Number 1:', num1);
               display.textContent = num2;
            operate(opSign,num1,num2);
        }
        
      }
    }


      function getEqualSign (inputArr){
        if (inputArr.includes('=')){
          display.textContent = '';
          let equalIndex = inputArr.indexOf('=');
          let equalSign = inputArr.slice(equalIndex,equalIndex+1)
           console.log(equalIndex);
           console.log(equalSign);
      
        }
    
        }
      getEqualSign(inputArr);

}

function operate (opSign,num1,num2){
let result;
let changedNum1 = parseFloat(num1);
console.log(num2);
let changedNum2;
    if (num2.trim() !== '') {
        changedNum2 = parseFloat(num2);
        console.log(changedNum2);
console.log(changedNum1);
console.log(changedNum2);
  if (opSign === '+'){
    result = changedNum1 + changedNum2; 
}else if (opSign === '-'){
  result = changedNum1 - changedNum2;
}else if (opSign === '*'){
  result = changedNum1 * changedNum2;
}else if (opSign === '/'){
  result = changedNum1 / changedNum2;
}
display.textContent = result;

}
} 
