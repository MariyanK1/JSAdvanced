/*
Write a program for a coffee machine. Calculate whether the money inserted in the machine is enough to make the order and print the corresponding output.

The input comes as an array of strings. Each string represents one order with different elements, separated by a single space  ' '.
The first element is the coins inserted
The second one is the type of drink (coffee or tea)
If the drink type is coffee, you will receive 'caffeine' or 'decaf'
You may receive 'milk', if the ordered drink is with milk. It costs 10% of the drink price, rounded to first decimal point
The last element is the quantity of sugar, between 0 and 5. No matter the quantity (except 0) it costs 0.10. Add the sugar at the end!

The prices of drinks are:



Types and price:

coffee caffeine

0.80
_________
coffee decaf

0.90
_________
tea

0.80
_________


For each order there are two possible outputs:

If the money inserted is enough, calculate the change of the order: 
'You ordered {drink}. Price: ${price} Change: ${change}'

If the money is not enough: 
'Not enough money for {drink}. Need ${moneyNeeded} more'

After proceeding all orders, print the total money earned from the successful orders in the format: 'Income Report: ${totalMoney}'

All of the numbers should be formatted to the second decimal point.



Example

Input

['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']

Output

You ordered coffee. Price: $1.00 Change: $0.00

Not enough money for tea. Need $0.60 more.

You ordered coffee. Price: $0.90 Change: $0.10

Income Report: $1.90
*/


function coffeeMachine(params = []) {
    let income = 0;
    while (params.length > 0) {
        let [insertedMoney, typeOfDrink, value1, value2, value3] = params.shift().split(', ');
        insertedMoney = Number(insertedMoney)

        switch (typeOfDrink) {
            case 'coffee':
                switch (value1) {
                    case 'caffeine':
                        let caffeinePrice = 0.80;

                        if (value2 === 'milk') {
                            let milkPrice = +(caffeinePrice * 0.10).toFixed(1);
                            caffeinePrice += milkPrice;
                            value3 = +value3

                            if (value3 > 0) {
                                caffeinePrice += 0.10;
                            }
                        } else {
                            value2 = +value2;

                            if (value2 > 0) {
                                caffeinePrice += 0.10;
                            }

                        }

                        if (caffeinePrice <= insertedMoney) {
                            let final = insertedMoney - caffeinePrice;
                            console.log(`You ordered ${typeOfDrink}. Price: $${caffeinePrice.toFixed(2)} Change: $${final.toFixed(2)}`);
                            income += caffeinePrice;
                        } else {
                            let finalPrice = caffeinePrice - insertedMoney;
                            console.log(`Not enough money for ${typeOfDrink}. Need $${finalPrice.toFixed(2)} more.`);
                        }

                        break;

                    case 'decaf':
                        let priceDecaf = 0.90;

                        if (value2 === 'milk') {
                            let milkiePrice = +(priceDecaf * 0.10).toFixed(1);
                            priceDecaf += milkiePrice;
                        } else {
                            value2 = +value2;

                            if (value2 > 0) {
                                priceDecaf += 0.10;
                            }
                        }

                        if (priceDecaf <= insertedMoney) {
                            let finalPr = insertedMoney - priceDecaf;
                            console.log(`You ordered ${typeOfDrink}. Price: $${priceDecaf.toFixed(2)} Change: $${finalPr.toFixed(2)}`);
                            income += priceDecaf;
                        } else {
                            let x = priceDecaf - insertedMoney;
                            console.log(`Not enough money for ${typeOfDrink}. Need $${x.toFixed(2)} more.`);
                        }
                        break;
                }
                break;

            case 'tea':
                let priceTea = 0.80;

                if (value1 === 'milk') {
                    let milchPrice = +(priceTea * 0.10).toFixed(1);
                    priceTea += milchPrice;
                } else {
                    value1 = +value1;
                    if (value1 > 0) {
                        priceTea += 0.10;
                    }
                }

                if (insertedMoney >= priceTea) {
                    let y = insertedMoney - priceTea;
                    console.log(`You ordered ${typeOfDrink}. Price: $${priceTea.toFixed(2)} Change: $${y.toFixed(2)}`);
                    income += priceTea
                } else {
                    let neededMoney = priceTea - insertedMoney;
                    console.log(`Not enough money for ${typeOfDrink}. Need $${neededMoney.toFixed(2)} more.`);
                }
                break;
        }
    }
    console.log(`Income Report: $${income.toFixed(2)}`);
}

coffeeMachine(['8.00, coffee, decaf, 4', '1.00, tea, 2'])

console.log('\n');

coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
