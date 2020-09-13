/*
You will be given some products that you should be able to add to your cart. Each product will have a name, picture and a price.
When the "Add" button is clicked, append the current product to the textarea in the following format: "Added {name} for {money} to the cart.\n". 
When the button "Checkout" is clicked, calculate the total money that you need to pay for the products that are currently in your cart.

Append the result to the textarea in the following format: 
"You bought {list} for {totalPrice}."
The list should contain only the unique products, separated by ", ". The total price should be rounded to the second decimal point.
Also, after clicking over "Checkout" and every from above is done you should disable all buttons.
(You can't add products or checkout again, if once checkout button is clicked)

*/

function solve() {
   let button = document.getElementsByTagName("button")
   let textArea = document.getElementsByTagName("textarea")[0]

   let list = {}

   Array.from(button).forEach(b => {
      b.addEventListener("click", (e) => {
         if (e.target.className === "add-product") {
            let currentElement = e.target.parentElement

            let priceElement = Number(currentElement.nextElementSibling.innerHTML)
            let brandElement = currentElement.previousElementSibling.children[0].innerHTML

            if (!list[brandElement]) {
               list[brandElement] = 0
            }
            list[brandElement] += priceElement

            textArea.innerHTML += `Added ${brandElement} for ${priceElement.toFixed(2)} to the cart.\n`
         } else {

            let totalPrice = Number(Object.values(list).reduce((a, b) => a + b, 0))
            textArea.innerHTML += `You bought ${Object.keys(list).join(', ')} for ${totalPrice.toFixed(2)}.`

            Array.from(button).forEach(b => b.disabled = true)

         }
      })
   })
}
