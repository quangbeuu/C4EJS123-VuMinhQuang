// Bài 5 : Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (2đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// Ví dụ
// Ngày 30/4/2019 là ngày hợp lệ
// Ngày 29/2/2019 là ngày không hợp lệ
// Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30] và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2 năm không nhuận thì chỉ có đến ngày 28
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
// Ví dụ
// Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
// Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021


let day = prompt('Enter day');
let month = prompt('Enter month');
let year = prompt('Enter year');

var date = new Date(year,month,day);

if (Date(year, month,day).getDate == 29){
    
}