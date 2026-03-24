// let userName = 'Sergey';
// console.log(userName);

// userName = 'Ivan';
// console.log(userName);

// let age;

// age = 18;

// console.log(age);

// const age = 18;

// console.log(age);

// var name = 'Ivan';
// console.log(name);

// const ourPlanetName = 'Earth';
// let currentUserTime;
// const articlesCount = 20;
// const isPaymentCash = true;

//1. number
// const pi = 3.14;


// const infinity = -10 / 0;
// const nanExample = 'name'/10;
// console.log(nanExample);

//2. string
// let userName = "Sergey";
// userName = 'Ivan';
// const message = `Hello, ${userName}!`;

// console.log(message);

//3. boolean
// const isAdmin = true;
// const hasChildren = false;
// console.log(isAdmin);

//4. null

// const apples = null;
// console.log(apples);

//5. undefined

// let animal;
// console.log(animal);

//6. symbol

// const symbolExample = Symbol('name');
// console.log(symbolExample);

//7. bigint

// const  bigintExample = 23131231223234234234234234234n;
// console.log(bigintExample);

//8. object

// const user = {
//     name: 'Sergey',
//     age: 18
// }
//  console.log(user.country);

//typeof

// const age = 20;
// const userName = 'Sergey';

// console.log(typeof('Test string' + 5));

// function sum(a,b) {
//     a + b;
// }
// const result = sum(10, 5);
// console.log(result);

const a = null;
const b = {};

function checkIsObject(value) {
    return typeof value === 'object' && value !== null;
}

console.log("isObject: ", checkIsObject([]));

