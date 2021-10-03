// Câu 1: 

// a. 7 numbers, starting from 0 (no user input)

// for(let i = 0; i < 7; i++){
//     console.log(i);
// }

// b. n numbers, starting from 0, n entered by user

// let n = Number(prompt('Enter a number?')); 

// for (let i = 0; i < n; i++){
//     console.log(i);
// }

// c. A sequence of numbers, starting from 3, ending before n, n entered by user

// let n = Number(prompt('Enter a number?')); 

// for (let i = 3; i < n; i++){
//     console.log(i);
// }

// d. A sequence of numbers, starting from c, ending before n, c and n entered by user

// let n = Number(prompt('Enter n'));
// let c = Number(prompt('Enter c'));

// for (let i = c; i < n; i++){
//     console.log(i);
// }

// e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user

// let n = Number(prompt('Enter n'));
// let c = Number(prompt('Enter c'));

// for (let i = c; i < n; i += 3){
//     console.log(i);
// }

// f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user

// let n = Number(prompt('Enter n'));
// let c = Number(prompt('Enter c'));
// let s = Number(prompt('Enter s'));

// for (let i = c; i < n; i += s){
//     console.log(i);
// }

// Câu 2: Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user

// let n = Number(prompt('Enter a number'));
// let factorial = 1;
// let i;

// for (i = 1; i <= n; i++){
//     factorial = factorial * i; 
// }
// console.log(`The factorial of ${i-1} is ${factorial}`);

// i-1 vì phải tăng i lên 6 ktra ko thỏa mãn thì vòng for
// mới dừng lại 

// Câu 3: Write a program asking users their age, and then decide if they are old enough to view a 14+ content

// let age = Number(prompt('How old are you?'));

// if (age < 14){
//     console.log('You are not old enough to view this content');
// }else{
//     console.log('Enjoy!');   
// }