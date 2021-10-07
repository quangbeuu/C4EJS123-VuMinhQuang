// Đề bài: 

// You are a shepherd who owns a flock of sheep

// a. Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:

let sheeps = [5,7,300,90,24,50,75];

console.log(`Hello, my name is Minh Quang and here is my sheep sizes:`);
console.log(...sheeps);


// b. At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. 
// Add scripts to search for the biggest sheep in your list:
// Hint: Google ‘JS Array find max’

let max = sheeps[0];

for(let i = 0; i < sheeps.length; i++){
    if(max < Number(sheeps[i])){
        max = Number(sheeps[i]);
    }
}

console.log(`Now my biggest sheep has size ${max}, let's shave it`)

// c. When your biggest sheer, its size will return to the default size, which is 8.
// Gợi ý: Google 'JS Array indexOf'


// + Hàm indexOf(): trả về giá trị chỉ mục của ptu
// trong mảng

indexM = sheeps.indexOf(max)

// Update: 
sheeps[indexM] = 8

console.log('After shearing, here is my flock');
console.log(...sheeps);


// d. In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out

// for(let i = 0; i < sheeps.length; i++){
//     sheeps[i] = sheeps[i] + 50;
// }

// console.log('MONTH 1');
// console.log('One month has, passed, my sheeps have grown, here are their sizes');
// console.log(...sheeps);


// e. Let’s do this for 4 months (or as long as you want)

let months = 4;

for (let k = 1 ; k <= months; k++){
    
    for(let i = 0; i < sheeps.length; i++){
        sheeps[i] = sheeps[i] + 50;
    }
    
    console.log(`MONTH ${k}`);
    console.log('One month has, passed, my sheeps have grown, here are their sizes');
    console.log(...sheeps);
    
    let max2 = sheeps[0];
    for(let i = 0; i < sheeps.length; i++){
        if(max2 < Number(sheeps[i])){
            max2 = Number(sheeps[i]);
        }
    }
    
    if(k == 4){
        break;
    }
    //=> Đề bài khi đến tháng cuối cùng thì ko cần xén lông
    // cừu để thay kích thước là 8 nữa
    
    console.log(`Now my biggest sheep has size ${max2}, let's shave it`)

    indexM2 = sheeps.indexOf(max2)

    // Update: 
    sheeps[indexM2] = 8

    console.log('After shearing, here is my flock');
    console.log(...sheeps);
}

// f. After day by day shearing sheep, you became bored. You want to sell your flock to travel the world. In order to have fair trade, 
// you must now calculate the total size of your sheep and then the expected money you can get from selling your flock, 
// before going to the market. Write a program to calculate the total size of your sheep as well as the money you would have. 
// Expected console output:

let sum = 0;
 
for (let i = 0; i < sheeps.length; i++){
    sum = sum + sheeps[i];
}

console.log(`My flock has size in total: ${sum}`);
console.log(`I would get ${sum} * 2$ = ${sum*2}$`);