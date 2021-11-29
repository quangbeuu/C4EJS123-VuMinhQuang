// Câu 1: 

// Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.

// Ví dụ: INPUT là [“BINH”, “HUNG”, “PHUOC”, “CAO”, “KHANH”] thì 
// OUTPUT return là [“PHUOC”, “KHANH”]

let arr = ["Binh","Hung","Phuoc","Cao","Khanh"];
function allLongestStrings(inputArray){
    let max = inputArray[0].length; 
    console.log(max)
    for (let i = 0; i < arr.length;i++){
        if(max < inputArray[i].length){
            max = inputArray[i].length; 
        }
    }
    console.log(max);

    let result = []
    for(let i = 0; i<arr.length;i++){
        if(inputArray[i].length == max){
            result.push(inputArray[i]);
        }
    }

    console.log(result)
}


allLongestStrings(arr);


