// const text = document.getElementById('text');

const title = document.querySelector('h1');
const text = document.querySelector('#text');

const postsList = document.querySelector('.posts-list'); //ul

const post = document.querySelector('.post');
// postsList.innerHTML += '<li>New post</li>';



const postsCollection = [...document.querySelectorAll('.post')];

console.log(postsCollection[1].textContent);
postsCollection[1].textContent = 'New  post 2';

text.style.fontSize = '36px';
text.style.color = 'green';

console.log(title.className);

title.classList.add('bg');
title.classList.remove('bg');

title.addEventListener('click', () => {
    title.classList.toggle('bg')
});

const newLi = document.createElement('li');
newLi.classList.add('post');
newLi.textContent = 'New create li';

postsList.prepend(newLi);

const beforeElement = document.createElement('div');
const afterElement = document.createElement('div');

beforeElement.textContent = 'Before ul';
afterElement.textContent = 'After ul';

postsList.before(beforeElement);
postsList.after(afterElement);

//TODO

const todoInput = document.querySelector('#todo');
const todoBtn = document.querySelector('.btn');
const todoList = document.querySelector('.todo-list')

todoBtn.addEventListener("click", function (event) {
    if(!todoInput.value) return;
  const task = document.createElement("li");
  task.textContent = todoInput.value;
  todoList.append(task);
  todoInput.value = "";
});

// console.log(todoInput, todoBtn, todoList);

todoBtn.addEventListener('click', function(event) {
    console.log(todoInput.value)
    // console.log('event.target', event.target)
    // console.log('event.currentTarget', event.currentTarget)

    // console.log('this', this)

})

// document.body.addEventListener('click', () => {
//     console.log('click body')
// })

// document.querySelector('.outer').addEventListener('click', () => {
//     console.log('click outer')
// })
// document.querySelector('.inner').addEventListener('click', (event) => {
//     event.stopPropagation();
//     console.log('click inner')
// })

// todoInput.addEventListener('input', (event) => {
//     console.log(event.target.value)
// })


// const form = document.querySelector('#form');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log('submit')
// })