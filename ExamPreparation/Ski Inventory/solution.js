/*
Write the missing JavaScript code to make the Ski Inventory application work as expected.
You should be able to add new products to the inventory.
Each product have name, quantity and price. When you click the [Add] button, a new list item should be added to the Available Products.

Your App should have a filter functionality. This means that every time you press the filter button you should filter the items (case insensitive).
Show those items that contain the string from the filter input field and hide all that do not match. 
When you click the [Add to Client's List] button you should add that item to My Products section ul.

Every time you add new item to My Products you should increase the Total Price with the price of the item and decrease available products with 1.
If there are no more available products, you should remove this item from the Available Products ul.
 
And last when you click the [Buy] button, you should empty the ul in My Products section and set the Total Price to 0.00

*/


function solve() {

   let $inputs = document.getElementById('add-new').querySelectorAll('input');
   let $buttonAdd = document.getElementById('add-new').querySelector('button');
   let $availableProducts = document.getElementById('products').querySelector('ul');
   let $filterInput = document.getElementsByClassName('filter')[0].querySelector('input');
   let $filterButton = document.getElementsByClassName('filter')[0].querySelector('button');
   let $h1 = document.getElementsByTagName('h1')[1];
   let $nameInput = $inputs[0];
   let $quantityInput = $inputs[1];
   let $priceInput = $inputs[2];
   let $myProductsUl = document.getElementById('myProducts').querySelector('ul');
   let $myProductsBtn = document.getElementById('myProducts').querySelector('button');



   $buttonAdd.addEventListener('click', e => {
      e.preventDefault();

      let $addToClientListBtn = document.createElement('button');
      $addToClientListBtn.textContent = `Add to Client's List`;
      let $listItem = document.createElement('li');
      let $span = document.createElement('span');
      $span.textContent = `${$nameInput.value}`;

      let $strong1 = document.createElement('strong');
      $strong1.textContent = `Available: ${Number($quantityInput.value).toFixed()}`;

      $listItem.appendChild($span);
      $listItem.appendChild($strong1);

      let $div = document.createElement('div');
      let $strong2 = document.createElement('strong');
      $strong2.textContent = `${Number($priceInput.value).toFixed(2)}`;

      $div.appendChild($strong2);
      $div.appendChild($addToClientListBtn);
      $listItem.appendChild($div);

      $availableProducts.appendChild($listItem);

      $addToClientListBtn.addEventListener('click', e => {
         e.preventDefault();

         let quantity = Number($strong1.textContent.substring(11));

         let total = `${Number($priceInput.value)}`;

         let $li = document.createElement('li');
         let $strong = document.createElement('strong');

         $strong.textContent = `${(+total).toFixed(2)}`;
         $li.innerHTML = `${$nameInput.value}`;
         $li.appendChild($strong);
         $myProductsUl.appendChild($li);

         $strong1.textContent = `Available: ${quantity - 1}`;
         quantity -= 1;

         if (!quantity) {
            e.target.parentNode.parentNode.remove();
         }

         let totalPrice = $h1.innerHTML.substring(13);

         $h1.innerHTML = `Total Price: ${(Number(total) + Number(totalPrice)).toFixed(2)}`
      })

      $filterButton.addEventListener('click', (e) => {
         e.preventDefault();

         Array.from($availableProducts.children).forEach(el => {
            if (el.firstChild.textContent.toLocaleLowerCase().includes($filterInput.value.toLocaleLowerCase())) {
               el.style.display = 'block';
            } else {
               el.style.display = 'none';
            }
         })

      })


   })
   $myProductsBtn.addEventListener('click', e => {
      $h1.innerHTML = 'Total Price: 0.00';
      $myProductsUl.innerHTML = '';
   })
}
