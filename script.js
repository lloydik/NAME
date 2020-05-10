'use strict';
let p = document.createElement('p');
let pSecret = document.createElement('p');
p.classList.add('secretP');
p.innerHTML='Ису';
pSecret.classList.add('verysecretp');
pSecret.innerHTML='https://github.com/lloydik/NAME/blob/master/myfile.png';
document.body.appendChild(p);
document.body.appendChild(pSecret);