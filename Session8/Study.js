// Câu 1: 

// + element.insertAdjacentHTML(position, text);
// Lý thuyết
// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->


// Bài làm: 

// 1 - d
// 2 - b
// 3 - a 
// 4 - c


// Câu 2:  setInterval

// setInterval(()=>{
//     console.log("Heehaw")
// },1000)


// Câu 3: 

// - Var: một biến toàn cục có thể được thay đổi bên trong function

// 3.1 Một biến được khai báo bởi let, trong một hàm có thể vẫn tồn tại sau khi hàm chạy xong không?

// - Ko tồn tại Vì let có phạm vi khối ({} của function là phạm vi khối)

// 3.2 Biến được khai báo bởi var, trong một hàm có còn tồn tại sau khi hàm chạy xong không?

// - Ko tồn tại vì var được khai báo trong hàm là biến cục bộ nên ra ngoài hàm ko còn tồn tại nữa


// Câu 4: 
//getElementsByTagName function to get ALL of the <li> tag. 
//Print/log out the first element (which is <li>Articles</li>) 
//and then use for loop to print ALL of the DOM you get from the function.

let tagLi = document.getElementsByTagName('li');
for(let i = 0; i < tagLi.length; i++){
    console.log(tagLi[i]);
}


// Câu 5: 

// Use getElementsByTagName function to get ALL of the <div> tag. 
// Print/log out the second element (which is <div class=”singer”>Nate Ruess</div>) 
// and then use for loop to print ALL of the DOM you get from the function.

let x = document.getElementsByClassName('singer');

console.log(x);
for(let i = 0; i < x.length; i++){
    console.log(x[i]);
}

// 6. Learn how to remove (Delete) an HTMLElement using HTMLElement.remove() function, refer to this

let d = document.getElementsByClassName('singer');
d.addEventListener('click', () => {
    d.remove();
})


// Câu 7: 

// 7.1 Catch ‘click’ event from 2 different buttons, id=”button1” and id=”button2”, in the callback body of the 2 events, print, or log out e.target. What is it?

let a = document.getElementById('button1');
a.addEventListener('click', (e)=>{
    console.log(e.target);
});

let b = document.getElementById('button2');
b.addEventListener('click', (e)=>{
    console.log(e.target)
});


// It is <button id="button1"> Click </button> and <button id="button2"> Click </button>


// 7.2 Catch a ‘keydown’ event from an input, in the callback body of the event, print / log out the e.key. What is it?
let c = document.addEventListener('keydown', (g)=>{
    console.log(g.key);
})

// It's button1 and button2