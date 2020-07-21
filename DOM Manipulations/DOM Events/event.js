const heading = document.querySelector('.heading');
const btn = document.querySelector('.btn');

// btn.onclick = () => {
// 	console.log('Clicked');
// };

// btn.onmouseover = () => {
// 	heading.style.backgroundColor = 'green';
// };

// btn.onmouseout = () => {
// 	heading.style.backgroundColor = 'transparent';
// };
// function clickMe() {
// 	console.log('Clicked');
// }

btn.addEventListener('click', e => {
	// heading.style.cssText = 'background-color: brown; color: white';
	console.log(e.target);
});
