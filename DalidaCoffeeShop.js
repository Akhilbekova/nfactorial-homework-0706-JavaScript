const coffeeShopName = "nFactorial coffee";
const ADDRESS = "New Yourk";

let customer;
customer = "Murat";
customer = "Aidoha";

let menuCoffee= [
    "1. Espresso",
    "2. Cappuccino",
    "3. Americano",
    "4. Latte",
    "5. Frappe",
    "Coffee with milk",
    "7. Coffee with ice",
];
for (let i = 0; i < 3; i++) {
    menuCoffe.push("Latte");
}
const soldOut = menuCoffee.map((menuCoffee) => "sold-" + menuCoffee);

console.log(soldOut);

const popular = menuCoffee.filter((menuCoffee) => menuCoffee == "Cappuccino");

console.log(popular);
let menuFood = [
    "Classic croissant",
    "Tie with chocolate",
    "Brussels Waffle with Sugar",
    "Croissant with blueberries",
    "Croissant Custard Lemon",
    "Croissant with cheese",
    "Croissant with chocolate",
    "Almond croissant from Dalida",
]
menuFood.pop();
menuFood.shift();
menuFood.unshift("Cookies \"Three chocolates\"");
console.log(menuFood);

let specialOffer = {
    name: "Fettuccine with chicken and mushrooms from Dalida",
    price: 5000,
    dish: "hot",
};

specialOffer.innings = "In a plate";
delete specialOffer.dish;

console.log(specialOffer);


let PositionInTheMenu = "Penne Arabiata";
let price = 1500;

let Food = { PositionInTheMenu, price };
console.log(Food);

let  popularFood = [
    "Classic croissant",
    "Tie with chocolate",
    "Brussels Waffle with Sugar",]
const storage = ["This", ...popularFood, "is the tastiest"];
console.log(storage);

if ("coffee" !== "tea") {
    console.log("This is not COFFEE");
}

let Cookie;

const TASTY_COOIES = "croissant" === Cookie ? true : false;

const croissant = "chocolate";

if (croissant) {
    console.log(`Chocolate croissant goes well with coffee`);
} else {
    console.log("Chocolate croissant doesn't go well with tea");
}

const Wafer = "Belgian";
switch (Wafer ) {
    case "chocolate":
        console.log("Served with berries");
        break;
    case "berry":
        console.log("Served with chocolate ");
        break;
    default:
        console.log("All Belgian waffles are delicious");
}


export { Wafer,croissant};