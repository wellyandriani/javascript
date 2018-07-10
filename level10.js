//level 10
console.log("LEVEL 10");

console.log("Determine the age to drink alcohol");
var age = 26;
var canDrinkAlcohol = (age > 21) ? "True, over 21" : "False, under 21";

console.log("Amount of money to buy shoes")
function buyshoes(price){
    return (price ? "Rp.500000" : "Rp.5000");
}
console.log(canDrinkAlcohol);
console.log(buyshoes(true));
console.log(buyshoes(false));
