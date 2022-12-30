
// Exercise 1 : Information

// Part I : function with no parameters
//1 Create a function called infoAboutMe() that takes no parameter.
//2 The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
function infoAboutMe() {
    console.log("My name is Lordwin, 27 years old, i like programming and play basket ball");
}
//3 Call the function
infoAboutMe();

// Part II : function with three parameters
/* 1 Create a function called infoAboutPerson(personName, personAge, personFavoriteColor)
 that takes 3 parameters.*/
/* 2 The function should console.log a sentence about the person (ie. “You name is …, 
    you are .. years old, your favorite color is …”) */
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("You name is " + personName + ", you are " + personAge + " years old, your favorite color is " + personFavoriteColor);
}

//3  Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


// Exercise 2 : Tips

//1 Create a function named calculateTip() that takes no parameter.

//2 Inside the function, use prompt to ask John for the amount of the bill.
function calculateTip() {

    let amountBill = prompt("Please enter the amount of the Bill !!");
    //3 Here are the rules
    if (amountBill < 50) {
        //If the bill is less than $50, tip 20%.
        let final = parseInt(amountBill) * 0.2 + parseInt(amountBill);
        console.log("tip " + amountBill * 0.2 + " and final bill " + final);
    } else if (amountBill > 50 || amountBill <= 200) {
        //If the bill is between $50 and $200, tip 15%.
        let final = parseInt(amountBill) * 0.15 + parseInt(amountBill);
        console.log("tip " + amountBill * 0.15 + " and final bill " + final);
    } else {
        //If the bill is more than $200, tip 10%.//
        let final = parseInt(amountBill) * 0.2 + parseInt(amountBill);
        console.log("tip " + amountBill * 0.1 + " and final bill " + final);
    }
}
//5 Call the calculateTip() function.

calculateTip();




// Exercise 3 : Find The Numbers Divisible By 23
// Bonus done
function isDivisible(divisor) {
    let sum = 0;
    for (let index = 0; index < 500; index++) {
        if (index % divisor == 0) {
            console.log(index);
            sum += index;
        }

    }
    console.log(sum);
}
isDivisible(3);
isDivisible(45);



//Exercise 4 : Shopping List

//1 Add the stock and prices objects to your js file. 
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

//2 Create an array called shoppingList 
let shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
function myBill() {
    let priceTotal = 0;
    for (let indexShopping = 0; indexShopping < shoppingList.length; indexShopping++) {
        if(!!stock[shoppingList[indexShopping]]){
                priceTotal+=prices[shoppingList[indexShopping]]
        }
    }
    return "The total price is : "+priceTotal;

}


//5 Call the myBill() function.
myBill();
console.log(myBill());



// Exercise 5 : What’s In My Wallet ?


/* 1 Create a function named changeEnough(itemPrice, 
amountOfChange) that receives two arguments : */

function changeEnough(itemPrice, amountOfChange){

    }
