/*
When the [Format] button is clicked, you need to format the text inside the paragraph with an id="input". The formatting is done as follows:
⦁	You need to create a new paragraph element which holds no more than 3 sentences from the given input.
⦁	If the given input contains less or 3 sentences, you need to create only 1 paragraph, fill it with these sentences and append this paragraph to the div with an id="output".
Otherwise, when you have more than 3 sentences in that input paragraph, you need to create enough paragraphs to get all sentences from the input text.
Just remember to restrict the sentences in each paragraph to 3.

Example:
⦁	If the input paragraph contains 2 sentences, you need to create only 1 paragraph with these 2 sentences
⦁	If the input paragraph contains 7 sentences, you need to create 3 paragraphs
- The first paragraph must contain the first 3 sentences
- The second paragraph must contain the other three sentences of the whole text
- The third paragraph will contain only the last sentence
To find out how many sentences there are in the text, simply split the whole text by '.' Also, every sentence must have at least 1 character.

*/

function solve() {
  const inputText = document.getElementById('input').innerText;
  const outputElement = document.getElementById('output');

  inputText
    .split('.')
    .map(sentence => sentence.trim())
    .reduce((acc, sentence, index) => {
      if (index % 3 === 0) { acc.push([sentence]); } else { acc[acc.length - 1].push(sentence); }
      return acc;
    }, [])
    .forEach(paragraph => {
      let parHTML = document.createElement('p');
      parHTML.textContent = paragraph;
      outputElement.appendChild(parHTML);
    });
}
