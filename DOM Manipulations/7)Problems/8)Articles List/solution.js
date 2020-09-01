/*
Constraints:
⦁	Title value from the title input should be a heading 3 element <h3>
⦁	Content text from the textarea element should be a paragraph <p>
⦁	Both new created elements (h3 and p) should be appended to a new article element <article>
⦁	The current article element should be appended to the section which has an id articles (#articles)
⦁	You should create new article element only if title and content are not empty
⦁	After the button is pressed you must clear the title value and text value
*/


function createArticle() {
	const titleArticle = document.getElementById('createTitle');
	const textArticle = document.getElementById('createContent');

	if (titleArticle.value !== '' && textArticle.value !== '') {
		let articleCreate = document.createElement('article');
		let section = document.getElementById('articles');
		section.appendChild(articleCreate);

		let h3Create = document.createElement('h3');
		let pCreate = document.createElement('p');
		articleCreate.appendChild(h3Create);
		articleCreate.appendChild(pCreate);

		h3Create.innerHTML = titleArticle.value;
		pCreate.innerHTML = textArticle.value;

		titleArticle.value = '';
		textArticle.value = '';

	}
}
