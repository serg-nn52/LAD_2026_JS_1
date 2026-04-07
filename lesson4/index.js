//1.
// let i = 0;
// while(i < 3) {
//     console.log('string');
//     i = i + 1;
//     //i++;
//     //i += 1;
// }

//2.
// do {
//     console.log('test')
// } while(false);

//3.
// let i = 0
// for(; i < 3; i++) {
//     console.log('string');
//     console.log(i);
// }
// console.log(i);

// for(let i = 0; i < 3; i++) {
//     if(i === 1) break; //полное прерывание цикла
//     console.log(i);
// }

// for(let i = 0; i < 3; i++) {
//     if(i === 1) continue; //полное прерывание цикла
//     console.log(i);
// }

// outer: for (let i = 0; i < 3; i++) {
//     inner: for(let j = 0; j < 3; j++) {
//         if(j === 1) break outer;
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// for (let a = 0; a < 10 ; a++) {
//     console.log('Привет!', a + 1);
// }

// function

// function getName() {
//     return 'Guest'
// }

// function sayHi(userName = 'Guest', greeting = 'Hi') {
//     console.log(`${greeting}, ${userName}!`);
// }

// sayHi();
// sayHi('Natalya', 'Welcome');
// sayHi('Mikhail', 'Privet');

// function sum(a, b) {
//     return a + b;
// }

// const result = sum(2,3);
// console.log(result);
// console.log(sum(10,20));
// const result = sayHi();
// console.log(result);

// function sayHi ()  {
//     // text = 'Welcome!';
//     let text = 'Hi!';
// 	console.log(text);
// }

// sayHi();
// sayHi('Sergey');
// console.log(text);



// function getResult(num1, num2 = 1 ) {
//     return num1 ** num2;
// }


// const getResult = function (num1, num2 = 1 ) {
//     return num1 ** num2;
// }

// console.log(getResult(2, 3));

// setTimeout(function() {
//     console.log('test');
// }, 3000);

// const sum = (a, b) => {
// 	return a + b;
// }

// const sum = (a,b) => a + b;

// const getResult = a => a ** 2; 

// console.log(getResult(5))

// const sayHi = () => {
//     console.log('Hi!');
// }
// sayHi();

// const print = (text, n) => {
//   for (let i = 0; i < n; i++) {
//     console.log(text);
//   }
// };

// print("Hi", 5)

// const isVowels = ch => {
//   switch (ch) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     case "y":
//       return true;
//     default:
//       return false;
//   }
// };

// console.log(isVowels("b"));

const checkLetter = (letter) => {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'y') {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkLetter('b')