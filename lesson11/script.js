
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




// console.log('Script start'); //1.
// setTimeout(() => {
// new Promise((resolve, reject) => {
//     resolve('New Promise resolved'); //очередь микрозадач //5
// }).then(res => console.log(res))
// .catch(err => console.log(err)); 
// console.log('setTimeout');   //4  
// }, 0);
// new Promise((resolve, reject) => {
//     resolve('Promise resolved');
// }).then(res => console.log(res))
// .catch(err => console.log(err)); //очередь микрозадач, задача 1 //3.
// console.log('Script End'); // 2.

// const promise = new Promise((res, rej) => {
//     return rej('Error!');
// })

//console.log('start')

// async function fetchData() {
//     try {
//         await Promise.reject('error!')
//         const result = await Promise.resolve('Data!')
//         console.log(result)
//         return result
//     } catch(err) {
//         alert('Error!')
//         console.log(err)
//     } finally {
//         console.log('finally')
//     }
   
// }

// const fetchData = () => {
//     try {
//         // await Promise.reject('error!')
//         // const result = await Promise.resolve('Data!')
//         // console.log(result)
//         // return result
//         throw new SyntaxError('Oooops!')
//     } catch(err) {
//         console.log('name', err.name)
//         console.log('message', err.message)
//         throw err
//     } finally {
//         console.log('finally')
//     }
   
// }

// try {
//     fetchData();
// } catch(err) {
//     console.log('outer error', err)
// }



// try {
//     await Promise.reject('error!')
// } catch (err) {
//     console.log(err)
// }
// console.log('finish')


// fetch('https://jsonplaceholder.typico1de.com/posts')
//       .then(response => {
//         console.log(response)
//         return response.json()
//       }).then(json => console.log(json)).catch(err => console.log(err))

// const ul = document.querySelector('.posts');
// const sendBtn = document.querySelector('button');
// const createBtn = document.querySelector('#create');
// const loader = document.querySelector('#loader');
// loader.remove();
// const error = document.querySelector('#error');
// error.remove();


//     const newPost = {
//         title: 'New post',
//     }

// const fetchPosts = async () => {
//     ul.innerHTML = null;
//     ul.before(loader);
//     error.remove();
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
//         const posts = await response.json();
//         posts.forEach((post) => {
//             const li = document.createElement('li');
//             li.textContent = post.title;
//             ul.append(li);
//         });
//         return posts;
//     } catch (err) {
//         console.log(err);
//         ul.before(error);
//     } finally {
//         loader.remove();
//     }
// }

// const createPost = async () => {
//     try {
//         await fetch('https://jsonplaceholder.typicode.com/posts/', {
//             method: 'POST',
//             body: JSON.stringify(newPost)
//         })
//     } catch (err) {
//         console.log(err);
//     }
// }


// fetchPosts();

// sendBtn.addEventListener('click', fetchPosts);
// createBtn.addEventListener('click', createPost);


//Map

// const dict = new Map([
//     ['err1', 'Не авторизован!'],
//     ['err2', 'Нет прав!']
// ])

// dict.set('err1', 'Данные не найдены!');

// console.log(dict.entries());

//Set

const arr = [1,3,5,3,6,8,9,5];

const uniqValues = new Set(arr);

console.log(uniqValues.keys());
console.log(uniqValues.values());
console.log(uniqValues.entries());

