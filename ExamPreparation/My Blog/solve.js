/*

Use the Given Skeleton to Solve This Problem.
Note: You Have NO Permission to Change Directly the Given HTML (Index.html File).


Your Task
Write the missing JavaScript code to make the Blog application work as expected.
You should be able to create new articles.
Each article has name, title, category and content. When you click the [Create] button, a new article item should be added to the articles section. 

Append two buttons, which are in a div element with class "buttons" to each article item
[Delete] button should have the following classes: "btn" and "delete"
[Archive] button should have the following classes: "btn" and "archive"

When you click the [Archive] button you should move the article to the ul in the archive section.
Archive section should be sorted by title.
Important! Do not move the entire article, but only the title of the article.  


When you click the [Delete] button you should delete the entire article. 


*/

function solve() {

   const $elements = {
      author: document.getElementById('creator'),
      title: document.getElementById('title'),
      category: document.getElementById('category'),
      content: document.getElementById('content'),
      sectionNewArticles: document.getElementsByTagName('section').item(1),
      sectionArchives: document.getElementsByTagName('section').item(3),
      buttonCreate: document.getElementsByClassName('btn create')[0],
   };

   $elements.buttonCreate.addEventListener('click', (e) => {
      e.preventDefault();

      const article = createEl('article');
      const h1 = createEl('h1', $elements.title.value);
      const pCategory = createEl('p', 'Category: ');
      const strong = createEl('strong', $elements.category.value);
      pCategory.appendChild(strong);
      const pCreator = createEl('p', 'Creator: ');
      const strong2 = createEl('strong', $elements.author.value);
      const pContent = createEl('p', $elements.content.value);
      const div = createEl('div', '', 'buttons');
      const deleteButton = createEl('button', 'Delete', 'btn delete');
      const archiveButton = createEl('button', 'Archive', 'btn archive');
      div.appendChild(deleteButton);
      div.appendChild(archiveButton);
      pCreator.appendChild(strong2);
      article.appendChild(h1);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pContent);
      article.appendChild(div);


      deleteButton.addEventListener('click', () => {
         article.remove();
      });

      archiveButton.addEventListener('click', (e) => {
         let parent = e.target.parentElement.parentElement;
         console.log(parent);
         let name = parent.querySelector('h1').textContent;
         let li = createEl('li', name);
         let ul = document.querySelector('ul');
         ul.appendChild(li);

         let sorted = Array.from(ul.getElementsByTagName('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent));

         console.log(ul.firstChild);
         while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
         }

         sorted.forEach((x) => ul.appendChild(x));

         article.remove();
      });

      $elements.sectionNewArticles.appendChild(article);

   })

   function createEl(tagName, text, className, id) {
      let element = document.createElement(tagName);

      if (id) {
         element.id = id;
      }

      if (className) {
         element.classList = className;
      }

      if (text) {
         element.textContent = text;
      }

      return element;
   }
}
