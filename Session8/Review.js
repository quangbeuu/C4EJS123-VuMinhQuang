// Câu 8: Viết một hàm, sử dụng cảnh báo để hiển thị tên của bạn và một điều bạn muốn làm trong 
// năm nay
function wishQuang(){
    alert("Quang! Gặp nhiều may mắn!");
}


// Câu 9: Viết một hàm, sử dụng cảnh báo để hiển thị tên người dùng và một điều ước của người 
// dùng trong năm nay, tên và điều ước là các tham số của hàm

function wishUser(name,wish){
    alert(`${name}! ${wish}`);
}

// wishUser("Đạt","Có người yêu")

// Câu 10: Viết một hàm, sử dụng cảnh báo để hiển thị tên người dùng và một điều ước của người 
// dùng trong năm nay, tên và điều ước là các tham số của hàm. Xử lý trường hợp thiếu điều ước 
// trong tham số hàm

let wish = "Goodluck";
function wishUser2(name,){
    alert(`${name}! ${wish}`);
}

// wishUser2("Quang",wish);

