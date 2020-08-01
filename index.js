// Write your code here!

const main = document.getElementById('main');
main.remove();

  let newHeader =document.createElement('h1');
 newHeader.id='victory';

  let myName='marwa';
  newHeader.innerHTML=`${myName} is the champion`;
