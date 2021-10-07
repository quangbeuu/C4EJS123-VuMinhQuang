
// I. Init (after 2)
// Initialize an array named movies containing the titles of some of your favorite movies

let movies = ['Tom and Jerry', 'Iron Man', 'Thor','Captian America']
console.log(movies)

// II. Create (after 4)
// Add new item named newMovie into the end of the movies array you initialized, newMovie entered by users

// let newMovies = prompt('Enter new movie');

// movies.push(newMovies)

// console.log(...movies.join(',').split(' '));

// III. Read (after 5)
// Read the item at position i in the movies array, i entered by users

// let index = prompt('Enter position of movies you want to read');

// console.log(movies[index]);

// IV. Update (after 6)
//  1. Update the first item of the movies array into movieTitle, movieTitle entered by users

// let movieUpdate = prompt('Enter name\'s movie update');

// movies[1] = movieUpdate;

// console.log(movies);
//  2. Update a item at position i of the movies into movieTitle, i and movieTitle entered by users

// let movieUpdate = prompt('Enter name\'s movie update');
// let indexUpadate;
// movies[1] = movieUpdate;

// console.log(movies);

// V. Delete (after 7)
// 1. Delete 1 item at position i from movies array movies, i entered by users

// let indexDelete = prompt('Enter position you want to delete');

// movies.splice(indexDelete,1);

// 2. Delete n item at position i from movies array, i and n entered by users

// let indexDelete = prompt('Enter position you want to delete');
// let numDelete = prompt('Enter number of movies you want to delete');

// movies.splice(indexDelete,numDelete);

// console.log(movies)


// VI. Read All (after 10)
// 1. Read or log all of items in movies array into console

// console.log(...movies.join(',').split(' '));

// 2. Read or log only first half items in movies array into console

// for(let i = 0; i <Math.round(movies.length/2); i++){
//     console.log(`${i+1}. ${movies[i]}`)
// }

// 3. Read or log all of items in movies array into console with the item position, for example:

// for (let i = 0; i < movies.length; i++){
//     console.log(`${i+1}. ${movies[i]}`)
// }

// ['Batman', 'Up', 'Attack on titans', 'My boss my hero']
// when printed out, results as follows:
// 1. Batman
// 2. Up
// 3. Attack on titans
// 4. My boss my hero
 

// VII. Update All: (after 11)
// Change all items of movies array into lowercase

// for(let i = 0; i < movies.length; i++){
//     movies[i] = movies[i].toLowerCase();
// }

// console.log(movies);


// VIII. Purpose of While (after 14)
// Note: If you have not figured out how to check a String length, google to learn about it with the keyword 'JS check String length'
 
// 1. Write a script asking users their username, if the entered username is too long (>15 characters), 
// tell them that and ask them to re-enter a new username, if the username is short enough (<=15 characters), tell them it is good.

while(true){
    let username = prompt('Register an username');
    if(username.length <= 15){
        alert('Good username');
        break;
    }else{
        alert('Your username is too long');
    }
}

// 2. Write a script to show user a quiz with 4 choices, for example:
 
// How many legs does a spider have?
// 1. None
// 2. 4 legs
// 3. 8 legs
// 4. 12 legs
 
// Then ask them to answer this quiz, if they enter an invalid choice, 'hahaha' for example, 
// tell them it is invalid and ask them to enter their choice again:

// Invalide choice, the answer must be 1, 2, 3 or 4

// If the choice is valid, check the result, if the answer is not correct:
//     Good luck next time
// If it is:
//     Bravo, you are correct

while(true){
    let ans = prompt('How many legs does a spider have \n1. None \n2. 4 legs \n3. 8 legs \n4. 12 legs');

    if(ans == 1 || ans == 2 || ans == 4){
        alert('Good luck next time');
    }else if(ans == 3){
        alert('Brave, you are correct');
        break
    }else{
        alert('It is invalid. Please try again')
    }
}