/*
You will receive an array of strings. For each string, create a div with a paragraph with the string in it.
Each paragraph is initially hidden (display:none). Add a click event listener to each div that displays the hidden paragraph.
Finally, you should append all divs to the element with an id "content".
*/

function create(words) {
   let content = document.getElementById('content');
   console.log(content);

   for (const word of words) {
      let p = document.createElement("p");
      p.innerHTML = word;
      p.style.display = "none";
      let div = document.createElement("div");
      div.appendChild(p);
      content.appendChild(div);
   }

   let div = document.querySelectorAll("div");

   Array.from(div).forEach((d) => {
      d.addEventListener("click", (e) => {
         if (e.target !== content) {
            e.target.children[0].style.display = "block";
         }
      })
   })
}
