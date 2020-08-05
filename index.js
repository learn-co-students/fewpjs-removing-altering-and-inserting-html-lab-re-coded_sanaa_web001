let main = document.getElementById('main');
main.remove();

let newHeader = document.createElement('h1');
//newHeader.setAttribute("id","victory");
newHeader.id = 'victory';
document.body.appendChild(newHeader);
newHeader.innerHTML = 'Ahemd is the champion';
