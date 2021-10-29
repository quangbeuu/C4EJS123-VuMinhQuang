//Bài 1: 

// 1. Tạo Promise mà resolve: trả về 'Promise is da best'
// sau 5s. Dùng Promise này để kiểm tra và sử dụng theo 2 cách 


//  a. Sử dụng await bên trong 1 hàm asyns (tức hàm ko đồng bộ)

async function wait(){
    let promise = await new Promise(function(resolve,reject){
    setTimeout(()=> {
        resolve('Promise is da best')
        },5000);
    })
    return promise;
}

wait()
    .then((value) => {console.log(value)});



//  b. Dùng hàm then

// let promise = new Promise(function(resolve,reject){
//     setTimeout(()=> {
//         resolve('Promise is da best')
//     },5000);

// })

// promise
//     .then((value) => {console.log(value)});



// Bài 2: 

// Sử dụng fetch () để tải dữ liệu từ một API, chúng ta có thể sử dụng 
// 2 async / await để lấy kết nối từ hàm fetch () và và dữ liệu từ hàm json (), 
// 2 await này có thể được thay thế bằng 2 lệnh gọi then (). 
// Tìm ra cách thực hiện, đây là một gợi ý: 


// const fetchPromise = fetch(a);
// fetchPromise.then(connection => {
//     console.log("Connected");
//     console.log(connection);
// });


// Sau kh có kết nối, bạn có thể đc truy cập, lấy dữ liệu 
// bằng cách xử lý hàm Promise do json() trả về 


async function fetchPromise(){
    const api = await fetch('https://pokeapi.co/api/v2/pokemon?limit=4');
    return await api.json();
} 

fetchPromise()
    .then(api => console.log(api));


// Bài 3: 


// Tìm hiểu cách tạo một API miễn phí, nhanh chóng bằng Google SpreadSheet 
// và SheetsDB, đăng ký tài khoản SheetsDB và làm theo hướng dẫn này. 
// Sau khi tạo thành công API của bạn và thử nghiệm nó với Ứng dụng 
// khách nghỉ ngơi, chẳng hạn như Ứng dụng khách nghỉ ngơi mất ngủ,
// hãy gửi URL API




// Câu 4: 

// Viết một hàm không có tham số / đối số, trả về một số ngẫu nhiên 
// từ 0 đến 10, sau đó đưa nó đi kiểm tra như sau:


const random = () =>{
    console.log(Math.floor(Math.random()*10))
}

const x = random(); 

if(x<0){
    console.log('Failed: the number is smaller than 0')
}
else if (x>10){
    console.log('Failed: the number is bigger than 10');
}
else{
    console.log('Passed, bravo');
}


// Câu 5: 

// Viết một hàm với 2 tham số / đối số: a và b, 
// trả về một số ngẫu nhiên từ a đến b, đem đi kiểm tra như sau:


// Chú ý: để tạo một số thực ngẫu nhiên nằm giữa a và b 
// => dùng Math.random*(b-a)+a 


const random2 = (a,b) =>{
    return Math.floor(Math.random()*((b-a)+a));
}

const x = random2(4, 16);
if (x < 4) {
  console.log('Failed: the number is smaller than 4');
} else if (x > 16) {
  console.log('Failed: the number is bigger than 16');
} else {
  console.log('Passed, bravo');
}


// Câu 6: 

// Viết hàm tính khoảng cách giữa 2 điểm (x1, y1) và (x2, y2), công thức là