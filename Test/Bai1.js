// Bài 1 : 
// Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// Đầu vào: str_input 
// Đầu ra: đảo ngược chuỗi và in ra kết quả

// Ví dụ:
// Cho: str_input = "program"; in ra: "margorp"
// Cho: str_input = "data"; in ra: "atad"
// Lưu ý: không sử dụng hàm reverse()


let str_input = 'program'; 
let str_reverse = '';

for(let i = str_input.length - 1; i >=0 ;i--){
    str_reverse += str_input[i];
}

console.log(str_reverse);