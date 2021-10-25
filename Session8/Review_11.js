// Câu 11: 

// 11.1: Viết HTML cho giao diện người dùng ở trên, tạo và liên kết tệp JS với nó

// 11.2: Nhận (Đọc) nút 'Upper it !!!!'

{
let button = document.getElementById('upper_btn');

console.log(button)
}

// 11.3: Bắt sự kiện khi nhấp vào nút 'Upper it !!!!'

// Cách 1: Ko bọc thẻ form ở ngoài (lúc đầu bấm ko chạy là do thẻ form chiếm width đè lên cả button)
{
let button = document.getElementById('button_inputs');
button.addEventListener('click',()=>{
    console.log('Upper it!!!! just clicked')
})
}

// Cách 2: Ngăn load lại trang của thẻ button khi đặt trong thẻ form
// function nam(){
//     return false;
// }

// 11.4: Đọc 'Enter your name' input

{
let input = document.getElementById('name_inputs');

console.log(input);
}

// 11.5: Lấy username từ input

{
let button = document.getElementById('button_inputs');
button.addEventListener('click',()=>{
    let name = document.getElementById('name_inputs').value;
    console.log('Upper it!!!! just clicked');
    console.log(`User's name: ${name}`);
})
}

// 11.6: Chuyển username thành chữ viết hoa
{
let button = document.getElementById('button_inputs');
button.addEventListener('click',()=>{
    let name = document.getElementById('name_inputs').value;
    console.log('Upper it!!!! just clicked');
    console.log(`User's name: ${name}`);
    console.log(`User's name uppercase: ${name.toUpperCase()}`);
})
}

// 11.7: Nhận (Đọc) thẻ "Kết quả của bạn sẽ xuất hiện ở đây"
{
let result = document.getElementById('result_div');
console.log(result);
}

// 11.8: Update "Your result will appear here" thành tên username viết hoa
{
let button = document.getElementById('button_inputs');
button.addEventListener('click',()=>{
    let name = document.getElementById('name_inputs').value;
    console.log('Upper it!!!! just clicked');
    console.log(`User's name: ${name}`);
    console.log(`User's name uppercase: ${name.toUpperCase()}`);
    let result = document.getElementById('result_div');
    result.textContent = name.toUpperCase();

})
}