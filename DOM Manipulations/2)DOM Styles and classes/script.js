const heading = document.getElementById('heading');
heading.className = 'changeBG';
// heading.className = 'changeFT';
heading.className += ' changeFT';

console.log(heading.classList);

heading.classList.add('changeCL');
heading.classList.remove('changeCL');

const lis = document.querySelectorAll('ul li');
console.log(lis);

for (let i = 0; i < lis.length; i++) {
	lis[i].style.backgroundColor = 'royalblue';
}

lis[0].style.cssText = 'background-color: coral; color: white; font-size: 25px';
