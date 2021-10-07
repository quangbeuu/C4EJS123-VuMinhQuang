

// Câu 1: 
// 1. Variable swap (hoán đổi biến)

// Swapping variable is to exchange the values of two variable so that at the end, one variable contains the value of the other

// For example:

// let a = 5;
// let b = 6;
// console.log(a, b); // Result: 5 6

// <Perform swapping>

// console.log(a, b); // Result: 6 5

// Google ‘JS swap variables’ to learn about at least 2 ways to perform this task, write at least 2 examples to 
// demonstrate you have acquired them, if you need hints, they are at the last page of this homework

//---------------------------------------------------------------------------------------------------------------------------------------------------------

// Cách 1 : Sử dụng biến trung gian để đối chỗ 
// let a = 5; 
// let b = 6; 

// console.log(`Before swap: ${a}, ${b}`);

// let tg; 

// tg = a; 
// a = b; 
// b = tg; 

// console.log(`After swap: ${a}, ${b}`);

// Cách 2 : Dùng index của array

// let a = 5; 
// let b = 6; 

// console.log(`Before swap: ${a}, ${b}`);

// let arr = [a, b];

// b = arr[0];
// a = arr[1];
// console.log(`After swap: ${a}, ${b}`);

// => có thể viết gọn là b = [a, a=b][0];


// Cách 3: Từ phiên bản ES6, có thể hoán đổi như sau:

// let a = 5; 
// let b = 6; 

// console.log(`Before swap: ${a}, ${b}`);

// [a,b] = [b,a];

// console.log(`After swap: ${a}, ${b}`);



// Câu 2: 
// 2. Split String into Array (Cắt chuỗi cho vào trong mảng)
// Using type conversion from String to Array

// const s = ‘Hello beauty there’;
// const a = Array(s);
// console.log(a); // Result: [“Hello beauty there”]

// Might NOT be what a developer expects; sometimes what they really want is

// const s = ‘Hello beauty there’;

// <Perform splitting>

// console.log(a); // Result: [“Hello”, “beauty”, “there”]

// Google ‘JS String splitting to Array’ to learn how to perform this task. Write an example to demonstrate your learning. 
// If you need hints, again, they are at the last page of this homework

// --------------------------------------------------------------------------------------------------------------------------------

// const s = "Hello beauty there";
// arr = s.split(' '); 

// console.log(arr);

// Hàm split() để cắt chuỗi theo ký tự chuyền vào hàm


// Câu 3: 

// In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of these tasks is to log (print out) 
// an array without using loops, try it:

// (Trong JS toán tử 3 chấm giúp in ra từng phần tử của mảng mà ko cần thông qua vòng lặp)

const a = [4, 5, 7, -8];
console.log(...a);

