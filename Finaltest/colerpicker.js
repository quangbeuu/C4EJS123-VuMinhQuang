let hexNums = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let colorBtn = document.querySelector(".color__btn");
let colorHex = document.querySelector(".color__hex");
console.log(Math.floor(Math.random()*8));

colorBtn.addEventListener("click",()=>{
    let hexCol = "#";
    for(let i = 0; i < 6;i++){
        let random = Math.floor(Math.random()*hexNums.length);

        hexCol += hexNums[random];
    }
    document.body.style.backgroundColor = hexCol;
    colorHex.innerHTML = hexCol.toUpperCase();
})

let colorCopy = document.querySelector(".color__copy");
colorCopy.addEventListener("click",()=>{
    document.execCommand("Hello world");
})


// Nút copy:

function copy(){
    let input = document.createElement("INPUT"); 
    // let colorHex = document.querySelector(".color__hex");
    document.body.appendChild(input);
    input.value= colorHex.innerHTML; 
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(input);
}

// 