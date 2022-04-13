// 1. 
function isEven(numbers) {
    if (numbers % 2 == 0) {
        return true;
    }
    return false;

}
let input = 4;
let result = isEven(input);
console.log(result)

// 2. 
function reactangleArea(a,b) {
    console.log(a*b);
}

reactangleArea(3,7);

// 3. 
function squareArea(a,b) {
    console.log(a+b);
}
squareArea(3,7);

// 4. 
let min=0;
let max=1;
let random = Math.random( +max - +min);
console.log(random);

let floor=Math.floor(Math.random() *1)
console.log(floor);

let round= Math.round(1)
console.log(round);

let min1=0;
let max1=100;
let random1 = (Math.random() *( 100) + 0);
console.log(random1);


// 5.
let userArr=[
    {
        userName:"nino",
        userAge:18,
    },
    {
        userName:"nika",
        userAge:19,
    },
    {
        userName:"mariam",
        userAge:22,
    },
    {
        userName:"elene",
        userAge:27,
    },
    {
        userName:"lizi",
        userAge:30,
    },

];
console.log(userArr)

const newArr = userArr.filter((el) => {
	return el.userAge <19 ;
});
console.log(newArr);

// 6.

function getCurrencySymbolFromCode(USD, EUR, GEL,NotValid) {
    if (getCurrencySymbolFromCode=USD)
    return ("$");
    if (getCurrencySymbolFromCode=EUR)
    return ("€");
    if (getCurrencySymbolFromCode=GEL)
    return ("ლ");
    if (getCurrencySymbolFromCode=NotValid)
    return ("£");


}

let label ='EUR';
let result1 = getCurrencySymbolFromCode(label);

console.log(getCurrencySymbolFromCode);
