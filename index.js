// Write your code here!

document.querySelector('main#main').remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
let myName = 'Muhanned';
newHeader.innerHTML = `${myName} is the champion!`;
