// Write your code here!

const main = document.querySelector('main#main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.innerHTML= "Osamah is the champion";
document.body.appendChild(newHeader);
