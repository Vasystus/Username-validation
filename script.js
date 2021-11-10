let myInput = document.querySelector('#usrname');
let button = document.querySelector('button');
let output = document.querySelector('p');

function myLength(){
 let text = myInput.value;
 return text.length > 5 ? true : false;
}


function theValidation() {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\w{5,}$/.test(myInput.value);
}

function finalOutcome() {
let input = myInput.value;
  if (myLength(input) && theValidation(input)) {
    output.innerText = 'Congratulation, you are in!';
    output.style.color = 'blue';
  } else {
    output.innerText = 'Try another one!';
    output.style.color = 'red';
  }
}
button.addEventListener('click', finalOutcome);
