// Bài 1: Học cách tạo số random từ 0 đến 1 

let a = Math.random().toFixed(2)
console.log(a);

// Bài 2: Chọn ngẫu nhiên một phần tử từ mảng

let arr = [2,5,6,9,10];

console.log(arr[Math.floor(Math.random() * arr.length)]);


// Bài 3: 

// Tạo cấu trúc dữ liệu để đại diện cho một danh sách các câu đố, mỗi câu đố chứa một câu hỏi, 4 lựa chọn và quyền Chọn. 
// Tạo nó sau đó yêu cầu người cố vấn của bạn xem xét dữ liệu của bạn trước khi chuyển sang bài tập tiếp theo


let list = [
    {
        question: "MindX ở đâu?",
        answer: "A. Thành công \n B. Tô Hiệu \n C. Đội Cấn \n D. Văn Cao",
        answerCorrect: "A"
    },
    {
        question: "Thủ đô Việt Nam là?",
        answer: "A. Thanh Hóa \n B. Hải Phòng \n C. Hải Dương \n D. Hà Nội",
        answerCorrect: "D"
    },
    {
        question: "Kim tự tháp ở đâu?",
        answer: "A. Hà Nội \n B. New York \n C. Tokyo \n D. Ai Cập",
        answerCorrect: "D"
    }
]

// Bài 4 + 5: 

// Viết kịch bản để chọn ngẫu nhiên một bài kiểm tra từ danh sách trên, hiển thị chúng cho người dùng
// Trả lời xem người dùng trả lời đúng hay sai

// let ranNum = Math.floor(Math.random() * list.length)
// while(true){
//     let ansUser = prompt(`${list[ranNum].question} \n ${list[ranNum].answer}`);
//     if(ansUser.toUpperCase() == list[ranNum].answerCorrect){
//         alert("You are correct!");
//         break;
//     }else{
//         alert("Oops. It's wrong. Please try again T-T");
//     }
// }


// Bài 6 + 7: 

// Để nó chạy liên tục, đảm bảo mỗi câu hỏi chỉ xuất hiện một lần, nếu hết câu hỏi, hãy cho người dùng biết 
// (lưu ý rằng kết quả hiển thị cho người dùng bị bỏ qua trong hình bên dưới)


// Tính tổng điểm của người dùng
let count = 0;
while(true){    
    let ranNum = Math.floor(Math.random() * list.length)    
    let ansUser = prompt(`${list[ranNum].question} \n ${list[ranNum].answer}`); 
    if(ansUser.toUpperCase() == list[ranNum].answerCorrect){
        count = count + 1;
    }
    console.log(count);
    list.splice(ranNum,1);
    
    if(list.length <=0){
        alert('We are out of question :(');
        alert(`You answered correctly ${count} of ${list.length}`);
        break;
    }
}

