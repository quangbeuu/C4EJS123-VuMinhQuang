// Câu 2: 

// Có một nhóm người đang đứng thành một hàng, để chia ra 
// làm 2 đội từ hàng người thì quản trò chia như sao. 
// Người đứng thứ nhất vào Team 1, người đúng thứ hai vào 
// Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục 
// như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng 
// của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu 
// trả về mảng chưa tổng cân nặng của 2 team.

// Ví dụ: INPUT [60, 40, 55, 75, 64] 
// thì OUTPUT là [179, 115]

let arr = [60,40,55,75,64]

function alternatingSums(a){
    
    let result = []
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < a.length; i++){
        if (i % 2 == 0){
            sum1 = sum1 + a[i];
        }
        else{
            sum2 = sum2 + a[i];
        }
    }

    result.push(sum1,sum2)

    console.log(result);
}

alternatingSums(arr);