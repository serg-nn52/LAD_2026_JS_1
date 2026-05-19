// 1.

// document.cookie = 'name=Sergey';
// document.cookie = 'role=admin';

// console.log(document.cookie);


// 2.

// const user = {
//     name: 'Sergey',
//     age: 41
// }

// localStorage.setItem('user', JSON.stringify(user));
// localStorage.setItem('role', 'admin');

// const toDoList = [
//     'ToDo1',
//     'ToDo2',
//     'ToDo3',
//     'ToDo4',
// ];

// localStorage.setItem('toDoList', JSON.stringify(toDoList));

// // localStorage.clear();

// const savedUser = JSON.parse(localStorage.getItem('user'));

// localStorage.removeItem('user');


// console.log(localStorage.getItem('user'));

//Promise

// const promise = new Promise((res, rej) => {
//      return setTimeout(() => {
//         res('Data')
//      }, 3000);
//     // return rej('Error!');
// })

// promise.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log('finally');
// })


//Event Loop

console.log('Script start'); //1.
setTimeout(() => {
new Promise((resolve, reject) => {
    resolve('New Promise resolved'); //очередь микрозадач //5
}).then(res => console.log(res))
.catch(err => console.log(err)); 
console.log('setTimeout');   //4  
}, 0);
new Promise((resolve, reject) => {
    resolve('Promise resolved');
}).then(res => console.log(res))
.catch(err => console.log(err)); //очередь микрозадач, задача 1 //3.
console.log('Script End'); // 2.