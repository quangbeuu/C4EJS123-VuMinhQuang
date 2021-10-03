// 1. Write a script to show user a nice message

// alert("You look beautiful today");


// 2. Write a script to ask user about their name, and then say hi to them, say something nice to them if you want :)

// name = prompt('Hi there, your name please?');

// Cách 1: 
// alert("Hi"+name);

// Cách 2:
// alert(`Hi ${name}`);

// 3. Write a script that ask 2 things from users, their first name and last name, then greet them with their full name

// firstName = prompt("Enter your first name");
// lastName = prompt("Enter your lastname"); 

// Cách 1: 
// alert("Hi " + lastName + " " + firstName);

// Cách 2: 
// alert(`Hi ${lastName} ${firstName}`);


// 4. Write a script that calculates the area of a square

// length = prompt("Enter the radius of the circle");

// Cách 1:
// alert('The square area is ' + length * length );

// Cách 2:
// alert('The square area is ' + length**2);

// Cách 3: 
// alert('The square area is ' + Math.pow(length,2));
// Hàm Math.pow: là hàm lấy số mũ 

// 5. Write a script that calculates the area of a circle

// radius = prompt('Enter the radius of the circle');

// Cách 1: 
// alert('The circle area is ' + 3.14 * radius**2);

// Cách 2: 
// alert('The circle area is ' + Math.floor(Math.PI * radius**2));

// 6. Write a script that converts Celsius (0C) into Fahrenheit (0F)

// Công thức đổi từ độ C sang độ F:
//  + C = 5/9(F-32)
//  + F = 9/5C +32 
temperatureC = Number(prompt('Enter the temperature in Celcius'));
temperatureF = 9/5 * temperatureC + 32;
alert(`${temperatureC} (C) = ${temperatureF} (F)`);