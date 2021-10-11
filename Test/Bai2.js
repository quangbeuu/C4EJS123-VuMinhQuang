// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)
// Đầu vào: str
// Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// Ví dụ
// Cho "this is Test"; In ra "This is Test"
// Cho "hello a"; In ra "Hello A”

let str = 'this is Test'; 

let cut_str = str.split(' ');
console.log(cut_str);

let arr = []
for(let i = 0; i <cut_str.length;i++){
    cut_str[i] = cut_str[i].charAt(0).toUpperCase() + cut_str[i].slice(1);
    arr.push(cut_str[i]);
}

let output = arr.join(" ");
console.log(output);




