// Câu 1:
// Write a script to store and process the learning tasks to become a front-end developer

let todos = [
    {
        language: "HTML",
        complete: false
    },
    {
        language: "CSS",
        complete: false
    },
    {
        language: "Basics of Javascript",
        complete: false
    },
    {
        language: "Node Package Manager (npm)",
        complete: false
    },
    {
        language: "Git",
        complete: false
    },
]

// 6.1
// In ra 

console.log('Hi there, this is your learning tasks to front-end developer career:')
for(let i = 0; i < todos.length; i++){
    console.log(`${i+1}. ${todos[i].language}`);
    console.log(`${todos[i].complete}`);
}
console.log('------------------------------------------------');

// 6.2 Creat
let command = prompt('Enter your command (New, Delete,Update,Complete)');

if(command == 'new' || command =='New'){
    let newTask = prompt('Enter new task:');
    let newObj = {};
    newObj.language = newTask;
    newObj.complete = false;
    
    todos.push(newObj);
}

console.log('Hi there, this is your learning tasks to front-end developer career:')
for(let i = 0; i < todos.length; i++){
    console.log(`${i+1}. ${todos[i].language}`);
    console.log(`${todos[i].complete}`);
}
console.log('------------------------------------------------');

// 6.3 Update
if(command == 'update' || command == 'Command'){
    let position = prompt('Enter position');
    let title = prompt('Enter new title');
    todos[position].language = title;
}

console.log('Hi there, this is your learning tasks to front-end developer career:')
for(let i = 0; i < todos.length; i++){
    console.log(`${i+1}. ${todos[i].language}`);
    console.log(`${todos[i].complete}`);
}
console.log('------------------------------------------------');

// 6.4 Complete

if(command == 'complete' || command == 'Complete'){
    let positionCom = prompt('Enter position');
    todos[positionCom].complete = true;
}

console.log('Hi there, this is your learning tasks to front-end developer career:')
for(let i = 0; i < todos.length; i++){
    console.log(`${i+1}. ${todos[i].language}`);
    console.log(`${todos[i].complete}`);
}
console.log('------------------------------------------------');

// 6.5 Delete 

if (command == 'delete' || command == 'Delete'){
    let positionDel = prompt('Enter position');
    todos.splice(positionDel,1);
}

console.log('Hi there, this is your learning tasks to front-end developer career:')
for(let i = 0; i < todos.length; i++){
    console.log(`${i+1}. ${todos[i].language}`);
    console.log(`${todos[i].complete}`);
}
console.log('------------------------------------------------');

// 6.6 Make printing / logging better

// let success = []
// console.log('Hi there, this is your learning tasks to front-end developer career:')
// for(let i = 0; i < todos.length; i++){
//     console.log(`${i+1}. ${success}  ${todos[i].language}`);
// }
// console.log('------------------------------------------------');

// if(command == 'complete' || command == 'Complete'){
//     let position2 = prompt('Enter position');
    
// }