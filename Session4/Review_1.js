
// Câu 1: 

// a. Khởi tạo một đối tượng để đại diện cho một từ điển, với các thuộc tính là từ khóa và các giá trị là phần giải thích, các giá trị ban đầu là từ bảng này

// let dic = {
//     'debug': 'The process of figuring out why your program has a certain error and how to fix it',
//     'done' : 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     'defect': 'The formal word for ‘error’', 
//     'pm': 'The short version of Project Manager, the person in charge of the final result of a project',
//     'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
// }


// let key = []
// for(let x in dic){
//     key.push(x);
// ;}
// while(true){
//     alert('Hi there, this is dev dictionary');
//     let keyword = prompt('Enter a keyword');
//     if (key.includes(keyword)){
//         alert(`${keyword} \n${dic[keyword]}`);
//     }else{
//         alert(`We could not find your word: ${keyword}`)
//     }
// }

//  Cách 2: => nghĩ sau
// let {debug,done, defect, pm,'ui/ux': uiux} = dic;


// b. Update your script so that it can let users contribute the explanation to the dictionary

let dic = {
    'debug': 'The process of figuring out why your program has a certain error and how to fix it',
    'done' : 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    'defect': 'The formal word for ‘error’', 
    'pm': 'The short version of Project Manager, the person in charge of the final result of a project',
    'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
}


while(true){
    let key = []
    for(let x in dic){
        key.push(x);
    }
    alert('Hi there, this is dev dictionary');
    let keyword = prompt('Enter a keyword');
    if (key.includes(keyword)){
        alert(`${keyword} \n${dic[keyword]}`);
    }else{
        let newWord = prompt(`We could not find your word: ${keyword}, leave your explanation`);
        dic[keyword] = newWord;
        alert('Done');
    }
}