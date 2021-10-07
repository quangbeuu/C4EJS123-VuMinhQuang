// BT  nâng cao
// 1. Người dùng nhập n số nguyên ngẫu nhiên từ bàn phím. 
// 2. Sắp xếp dãy vừa nhập theo chiều tăng dần
// 3. Lọc dãy trên thành 2 dãy: dãy chẵn và dãy lẻ
// 4. Loại bỏ các số trùng nhau ở 2 dãy.


//1. 
// let nums = prompt('Nhập n số nguyên bất kỳ từ bàn phím (cách nhau bởi dấu phẩy)');

// let arr = nums.split(',');

arr = [3,1,3,5,3,6,7,9,10,20,100,-1,-2];


//2. 
// Cách 1: Sắp xếp dùng 2 vòng for:
let temp;
for(let i = 0; i < arr.length-1; i++){
    for(let j = i + 1; j < arr.length;j++){
        if(arr[i] > arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

// console.log(arr);

// Cách 2: Dùng hàm sort
// => Một lưu ý khi sử dụng sort() là sort() chuyển các 
// phần tử thành chuỗi và so sánh các chuỗi để xác định ký
// tự

// => Để khắc phục cần truyền 1 hàm so sánh cho phương thức
// sort()

// arr.sort(function (a,b){
//     if(a>b){
//         return 1;
//     }
//     if(a<b){
//         return -1;
//     }
//     return 0; 
// });
// console.log(arr);


// 3. 

// let chan = [];
// let le = [];
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         chan.push(arr[i]);
//     }else{
//         le.push(arr[i]);
//     }
// }

// console.log(`Chẵn: ${chan}`);
// console.log(`Lẻ: ${le}`);


// 4. 

let newArr = []
for(let i = 0; i < arr.length; i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i]);
    }
}

console.log(newArr);

// => Còn nhiều cách khác