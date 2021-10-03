// Câu 1: 
// Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range

// let n = Number(prompt('Enter a number'));

// if (n < 9/2){
//     console.log('Lower half of 9');
// }else {
//     console.log('Higher half of 9');
// }

// Câu 2: 
// Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n

// let n = Number(prompt('n ='));
// let x = Number(prompt('x ='));

// if (x < n/2){
//     console.log(`${x} is in lower half of ${n}`);
// }else{
//     console.log(`${x} is in higher half of ${n}`);
// }

// Câu 3:
// Write a script to check if a number is even (divisible by 2) or odd number

// let x = Number(prompt('x ='));

// if (x % 2 == 0){
//     console.log(`${x} is an even number`);
// }else{
//     console.log(`${x} is an odd number`);
// }

// Câu 4: Write a program to print out
// a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)

// let total = 6; 

// for(let i = 0;i < Math.ceil(total/2); i++){
//     console.log('L');
// }
// for(let i = 0;i < Math.floor(total/2); i++){
//     console.log('H');
// }

// b. n L’s and H’s in total, n entered by user
// let total = Number(prompt("Enter the total number of L's and H's?"));

// for(let i = 0;i < Math.ceil(total/2); i++){
//     console.log('L');
// }
// for(let i = 0;i < Math.floor(total/2); i++){
//     console.log('H');
// }

// c. 8 1’s and 0’s in total, consecutively

// let total = Number(prompt("Enter the total number of L's and H's?"));

// for(let i = 0; i < Math.round(total/2); i++){
//     console.log(0);
//     console.log(1);
// }

// d. n 1’s and 0’s in total, consecutively, n entered by user
// let n = Number(prompt("Enter the total number of 1's and 0's?")); 

// for(let i = 0; i < n; i++){
//     if(i % 2 == 0){
//         console.log(i,0);
//     }else{
//         console.log(i,1);
//     }
// }

// Câu 10: 
// Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows

// BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m))
// Note: you must do the conversion from cm to m before calculation

// And then based on the calculated BMI, tell them that they are:
//      +Severely underweight if BMI < 16
//      +Underweight if BMI is between 16 and 18.5
//      +Normal if BMI is between 18.5 and 25 
//      +Overweight if BMI is between 25 and 30
//      +Obese if BMI is more than 30

// let weight = Number(prompt("Your weight in kg?"));
// let height = Number(prompt("Your height in cm?"));
 
// let BMI = weight/((height/100)**2);

// alert(`Your BMI is ${BMI.toFixed(1)}`);
// // Hàm toFixed lấy số chữ số thập phân sau dấu phẩy 

// if(BMI < 16){
//     alert('You are Severely underweight');
// }else if(BMI < 18.5){
//     alert('You are underweight');
// }else if(BMI < 25){
//     alert('You are normal')
// }else if(BMI < 30){
//     alert('You are overweight');
// }else{
//     alert('You are Obese');
// }























// idol = ['Ronaldo', 'Messi', 'Neymar'];
// console.log(idol)

// while(true){
//     let ask = String(prompt('Bạn có muộn nhập thay đổi tên cầu thủ nào không?'));
//     if (ask == 'Y' || ask == 'y'){
//         let xoa; 
//         while(true){
//             xoa =prompt("Nhập vị trí cầu thủ muốn xóa");
//             if(xoa<=2){
//                 idol.splice(xoa,1);
//                 alert(idol);
//                 break
//             }
//             alert("Không có cầu thủ nào có vị trí này");
//         }
//     }else{
//         alert("Good Bye!");
//         break
//     }
// }

