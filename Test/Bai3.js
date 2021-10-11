// Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
// Đầu vào: 1 mảng
// Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// Ví dụ
// Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]

// let arr=['one','two','three','one','one','four','five','four','five','five'];

let arr = [1,2,3,3,4,5,4,4,4,5,5];
let output = [];

for (let i = 0; i < arr.length; i++){
    if(!output.includes(arr[i])){
        output.push(arr[i]);
    }
}

console.log(output);