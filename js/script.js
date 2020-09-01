let nameInput = document.querySelector('.name');
let ageInput = document.querySelector('.age');
let button = document.querySelector('button');

let user = {};

button.addEventListener('click', function(){
  checkUserInputs(nameInput.value, ageInput.value)
    .then(checkUserAge)
    .then(setIdCardNumberToUser)
    .then(validUserIdCard)
    .then(() => console.log(user))
    .catch(error => console.log(error));
});

function checkUserInputs(name, age) {
  return new Promise((resolve, reject) => {
    if(!name || !age) {
      reject(new Error('Fullfill all fields'));
    }
    user.name = name;
    user.age = age;
    resolve();
  })
}

function checkUserAge(){
  return new Promise((resolve, reject) => {
    if(user.age < 18) {
      user.parent = prompt("Enter parent's name");
      resolve();
    } else if(user.age >= 18 && user.age < 100) {
      user.jobTitle = prompt('Enter your job title');
      resolve();
    } else {
      reject(new Error('You have an incorrect age'));
    }
  })
}

function setIdCardNumberToUser() {
  return new Promise((resolve, reject) => {
    let idCardNumber = prompt('Enter id card number');
    if(!idCardNumber) {
      reject(new Error('Please enter id card number'))
    } 
    user.idCardNumber = idCardNumber;
    resolve();
  })
}

function validUserIdCard() {
  return new Promise((resolve, reject) => {
    if(user.idCardNumber.length !== 7) {
      reject(new Error('Incorrect id card value'));
    } 
    resolve();
  })
}