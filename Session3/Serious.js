// 1. 
// Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, 
// calculate the sum of the numbers and show it to users
// (yêu cầu ng dùng nhập 1 dãy số ngăn cách nhau bởi dấu phẩy => In ra tổng các dãy đó) 

// let num = prompt('Enter a squence of Number, separated by commas(,)');

// let listNum = num.split(',');

// let sum = 0;

// for(let i = 0; i < listNum.length; i++){
//     sum = sum + Number(listNum[i]);
// }
// alert(`The sum of them is ${sum}`);


// 2. 
// Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users

// Cách 1: Dùng vòng lặp
// let num = prompt('Enter a squence of Number, separated by commas(,)');

// let listNum = num.split(',');
// let min = Number(listNum[0]);

// for(let i = 0; i < listNum.length; i++){
//     if(Number(listNum[i]) < Number(listNum[0])){
//         min = Number(listNum[i]);
//     }
// }

// alert(`The smallest number is ${min}`);


// Cách 2: Dùng hàm min + Toán tử 3 chấm
// let num = prompt('Enter a squence of Number, separated by commas(,)');

// let listNum = num.split(',');

// alert(`The smallest number is ${Math.min(...listNum)}`);


// 3. 
// Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so

// const arr = [3, 4, 6, -9, 10, -88, 2];

// const arr = [3, 4, 6, -9, 10, -88, 2];

// let num = Number(prompt('Enter a number'));
// let count=0;

// for(let i = 0; i < arr.length; i++){
//     if(num == arr[i]){
//         alert(`${num} is FOUND in-1- my array at index ${i}`);
//         count++;
//         break;
//     }
// }

// if(count == 0){
//     alert(`${num} is NOT found in my array`);3
// }

// => Nếu số nhập vào bằng 1 số trong mảng thì sẽ in ra và
// tăng biến đếm lên 1

// => Nếu biến đếm = 0 tức là ko có số nào bằng nhau 
// => số ko có trong mảng
