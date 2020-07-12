function fruit(fruit, weight, priceForKg) {
    let kg = weight / 1000;
    let sum = kg * priceForKg;
    console.log(`I need $${sum.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.8)
