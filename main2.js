var rawInputArr = [];
var opSign;
var input;

var display = document.querySelector('.display');  
var eventParent1 = document.querySelector('.inputParent');
eventParent1.addEventListener('click',captureEvent1);

function captureEvent1(event){
  var displayValue = display.textContent;
   displayValue = event.target.textContent; 
    
  
}

console.log(displayvalue);



  // console.log(input);
  // rawInputArr.push(input);
  // var inputArr=rawInputArr.join('');
  // display.textContent = inputArr;









  

  
  
         function getSignOp(inputArr) {
      var operatorSearchArr = ['+', '-', 'x', '/'];
      for (var i = 0; i< inputArr.length;i++){
        if(inputArr.includes(operatorSearchArr[i])){
          console.log('at index No '+ inputArr.indexOf(operatorSearchArr[i]));
          var opIndex = inputArr.indexOf(operatorSearchArr[i]);
          var operator = inputArr.slice(opIndex,opIndex+1);
          console.log(operator);
          var opSignIndex = inputArr.indexOf(operator);
          var num1 = inputArr.slice(0, opSignIndex);
               var num2 = inputArr.slice(opSignIndex + 1 );
               console.log('Number 1:', num1);
               console.log('Number 2:', num2);  
               display.textContent = num2;
            operate(operator,num1,num2);
        }
        
      }
    }


//       function getEqualSign (inputArr){
//         if (inputArr.includes('=')){
//           display.textContent = '';
//           var equalIndex = inputArr.indexOf('=');
//           var equalSign = inputArr.slice(equalIndex,equalIndex+1)
//            console.log(equalIndex);
//            console.log(equalSign);
      
//         }
    
//         }
//       getEqualSign(inputArr);

// }

// function operate (opSign,num1,num2){
// var result;

// var changedNum1 = parseFloat(num1);

// var changedNum2;
//     if (num2.trim() !== '') {
//         changedNum2 = parseFloat(num2);
      
//         console.log(changedNum2);
//   if (opSign === '+'){
//     result = changedNum1 + changedNum2; 
// }else if (opSign === '-'){
//   result = changedNum1 - changedNum2;
// }else if (opSign === '*'){
//   result = changedNum1 * changedNum2;
// }else if (opSign === '/'){
//   result = changedNum1 / changedNum2;
// }
// display.textContent = result;
// var str1 = result.toString();
//  if (result !== undefined){
//  str1 = num1;
//  }

// }
