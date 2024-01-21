let num1 = document.querySelectorAll('.numInputsButtons');
let numInput1 = num1.innerHTML;

let numParentDiv = document.querySelector('.numInput');
num1.addEventListener('click',captureNumInputs);
function captureNumInputs (event){

    for (let i =0;i<= num1;i++){

    if (event.target.innerHTML = true){
        console.log(event.target.innerHTML);
    }else {
        console.log(false);
    }
    }
}
