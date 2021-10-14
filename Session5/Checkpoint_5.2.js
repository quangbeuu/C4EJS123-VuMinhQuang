// Câu 2: 

// Cho danh sách: 

// [‘to’, ‘be’, ‘that’, ‘of’, ‘elon’, ‘to’, ‘this’, ‘now’, ‘back’, ‘cool’, ‘hey’, ‘love’, ‘of’, ‘life’, ‘that’, ‘rain’, ‘summer’, ‘color’, ‘now’, ‘of’, ‘hat’, ‘late’, ‘sorry’, ‘my’, ‘team’]

// Viết chương trình đếm số lần xuất hiện của các từ


// Cách 1:

// let list = 
// ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];


// Hàm Set() của ES6: giúp xóa bỏ trùng lặp trong mảng

// words = []
// occurences = []

// for(let word in list){
//     if(!words.includes(list[word])){
//         words.push(list[word]);
//         occurences.push(0);
//     }
//     occurences[words.indexOf(list[word])]+=1;
// }

// console.log(words.length);
// console.log(occurences.length);
// => dài bằng nhau 

// for (let i = 0; i <words.length; i++){
//     console.log(`${words[i]}: ${occurences[i]}`);
// }



// Tư duy giải: 

// B1: Loại bỏ sự trùng lặp 
// + Tại bc này khởi tạo 1 mảng chứa các từ khi loại bỏ sự trùng lặp
// + Đồng thời để tất cả biến đếm là 0 

// B2: Tăng biến đếm
// + Nó sẽ đếm được số lần xuất hiện của từ đó để cộng 
// vào biến đếm tại array occurences 


// Cách 2:

let list = 
['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];

let count = {};
for(let i = 0; i < list.length;i++){
    let word = list[i];
    // console.log(word);

    if(count[word]){
        count[word]++;
    }else{
        count[word] = 1; 
    }
}

console.log(count);

for (let key in count){
    console.log(`${key}: ${count[key]}`);
}