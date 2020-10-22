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
   const $nameInput = document.querySelector('#add-new > input[type=text]:nth-child(2)');
   const $quantityInput = document.querySelector('#add-new > input[type=text]:nth-child(3)');
   const $priceInput = document.querySelector('#add-new > input[type=text]:nth-child(4)');
   const $addButton = document.querySelector('#add-new > button');
   const $availableProducts = document.querySelector('#products > ul');
   const $filterInput = document.querySelector('#filter');
   const $filterButton = document.querySelector('#products > div > button');
   const $myProductsUl = document.querySelector('#myProducts > ul');
   const $buyButton = document.querySelector('#myProducts > button');
   const $totalPriceh1 = document.querySelector('body > h1:nth-child(4)');


   $addButton.addEventListener('click', e => {
      e.preventDefault();

      const $listItem = createEl('li');
      const $span = createEl('span', `${$nameInput.value}`);
      const $strong = createEl('strong', `Available: ${$quantityInput.value}`);
      const $div = createEl('div');
      const $strong2 = createEl('strong', `${Number($priceInput.value).toFixed(2)}`);
      const $addClientsListButton = createEl('button', `Add to Client's List`)
      
      $div.appendChild($strong2);
      $div.appendChild($addClientsListButton);

      $listItem.appendChild($span);
      $listItem.appendChild($strong);
      $listItem.appendChild($div);

      $availableProducts.appendChild($listItem);

      $addClientsListButton.addEventListener('click', e => {
         e.preventDefault();

         let availableQuantity = Number($strong.textContent.replace('Available: ', ''));
         let total = `${Number($priceInput.value).toFixed(2)}`;

         const $li = createEl('li');
         const $strong3 = createEl('strong', `${total}`);

         $li.innerHTML = $nameInput.value;
         $li.appendChild($strong3);
         $myProductsUl.appendChild($li);
         
         availableQuantity -= 1;

         $strong.textContent = `Available: ${availableQuantity}`;

         if (!availableQuantity) {
            e.target.parentNode.parentNode.remove();
         }

         let totalPrice = Number($totalPriceh1.textContent.replace('Total Price: ', ``));
         totalPrice += Number(total);
         
         $totalPriceh1.innerHTML = `Total Price: ${Number(totalPrice).toFixed(2)}`
      });




   })

   $buyButton.addEventListener('click', () => {
      $totalPriceh1.innerHTML = `Total Price: 0.00`;
      $myProductsUl.innerHTML = '';
   })

   $filterButton.addEventListener('click', e => {
      e.preventDefault();

      let list = $availableProducts.children;

      Array
         .from(list)
         .forEach((el) => {

            if (el
               .firstChild
               .textContent
               .toLocaleLowerCase()
               .includes($filterInput.value.toLocaleLowerCase())
            ) {
               el.style = 'block';
            }

            else {
               el.style.display = 'none';
            }
         });
   })



   function createEl(tag, text) {
      let e = document.createElement(tag);

      if (text) {
         e.textContent = text;
      }

      return e;
   }
}
