// Câu 12: 

// 12.1: Trong JS, Khởi tạo một biến có tên các mục để lưu trữ dữ liệu ở trên, đăng nhập / in nó ra
{
let list = ['Backpack','MiBand watch','Ring'];
console.log(list);
}

// 12.2: Trong HTML, tạo một <ul> với một số mục kiểm tra. Nếu bạn chưa làm việc với danh sách không 
// có thứ tự trước đây, hãy xem video ‘HTML - Danh sách và Bảng’ hoặc xem ví dụ nhanh này.


// 12.3: Get (Read) the list from DOM

{
let tagUl = document.getElementById('item_list_ul'); 

console.log(tagUl);
}

// 12.4: Hiển thị TẤT CẢ dữ liệu trong các mục, mỗi mục là một thẻ <li>

// {
//     let list = ['Backpack','MiBand watch','Ring'];
//     let tagUl = document.getElementById('item_list_ul');

//     for(let i = 0 ;i < list.length; i++){
//         tagUl.insertAdjacentHTML('beforeend',`<li>${list[i]}</li>`);
//     }
// }

// Các mục kiểm tra bây giờ có thể được gỡ bỏ

// {
//     let list = ['Backpack','MiBand watch','Ring'];
//     let tagUl = document.getElementById('item_list_ul');

//     tagUl.innerHTML = ''

//     for(let i = 0 ;i < list.length; i++){
//         tagUl.insertAdjacentHTML('beforeend',`<li>${list[i]}</li>`);
//     }
    
// }


// 12.5: Cập nhật giao diện người dùng (HTML) như sau:


// 12.6: Get the ‘New item’ input and ‘Add’ button

{
    let newItem = document.getElementById('item_input');
    let button = document.getElementById('add_btn');

    console.log(newItem);
    console.log(button);
}

// 12.7: Đăng ký sự kiện nhấp vào nút "Add"

// {
//    let button = document.getElementById('add_btn');

//     button.addEventListener('click',()=>{
//         console.log('Add button clicked');
//     })
// }

// 12.8: Khi nhấp vào nút "Thêm", giá trị của "Mặt hàng mới" được nhập

// {
//     let button = document.getElementById('add_btn');
 
    
//     button.addEventListener('click',()=>{
//         let input = document.getElementById('item_input').value;
//         console.log('Add button clicked');
//         console.log(input)
//     })
//  }


// 12.9: Khi nhấp vào nút ‘Thêm’, hãy thêm giá trị của đầu vào ‘Mặt hàng mới’ vào Mảng mục

// {
//     let list = ['Backpack','MiBand watch','Ring'];
//     let button = document.getElementById('add_btn');

//     button.addEventListener('click',()=>{
//         let input = document.getElementById('item_input').value;
//         console.log('Add button clicked');
//         console.log(input);
//         list.push(input);
//         console.log(list)
//     })
// }


// 12.10: Update UI (HTML) to reflect the update of items Array 

// {
//     let list = ['Backpack','MiBand watch','Ring'];
//     let button = document.getElementById('add_btn');

//     button.addEventListener('click',()=>{
//         let input = document.getElementById('item_input').value;
//         console.log('Add button clicked');
//         console.log(input);
//         list.push(input);
//         console.log(list)

//         let tagUl = document.getElementById('item_list_ul');
//         tagUl.insertAdjacentHTML("beforeend", `<li>${input}</li>`);
//     })
// }


// 12.11: Đặt lai input sau khi thêm mục mới
// {
//     let list = ['Backpack','MiBand watch','Ring'];
//     let button = document.getElementById('add_btn');

//     button.addEventListener('click',()=>{
//         let input = document.getElementById('item_input').value;
//         console.log('Add button clicked');
//         console.log(input);
//         list.push(input);
//         console.log(list)

//         let tagUl = document.getElementById('item_list_ul');
//         tagUl.insertAdjacentHTML("beforeend", `<li>${input}</li>`);
//         console.log(tagUl);
//     })
// }


// 12.12: Thêm nút xóa cho từng mục
// {
//     let list = ['Backpack','MiBand watch','Ring'];
//     let button = document.getElementById('add_btn');
//     let tagUl = document.getElementById('item_list_ul');

//     tagUl.innerHTML = ''

//     for(let i = 0 ;i < list.length; i++){
//         tagUl.insertAdjacentHTML('beforeend',`<li><span>${list[i]}</span><button>remove</button></li>`);
//     }

//     button.addEventListener('click',()=>{
//         let input = document.getElementById('item_input').value;
//         console.log('Add button clicked');
//         console.log(input);
//         list.push(input);
//         console.log(list)

//         let tagUl = document.getElementById('item_list_ul');
//         tagUl.insertAdjacentHTML("beforeend", `<li><span>${input}</span><button>remove</button></li>`);
        
//     })
// }


// 12.13: Register to each ‘remove’ buttons’ event

{
    let list = ['Backpack','MiBand watch','Ring'];
    let button = document.getElementById('add_btn');
    let tagUl = document.getElementById('item_list_ul');

    tagUl.innerHTML = ''

    for(let i = 0 ;i < list.length; i++){
        tagUl.insertAdjacentHTML('beforeend',`<li><span>${list[i]}</span><button id="btn">remove</button></li>`);
    }

    button.addEventListener('click',()=>{
        let input = document.getElementById('item_input').value;
        console.log('Add button clicked');
        console.log(input);
        list.push(input);
        console.log(list)

        let tagUl = document.getElementById('item_list_ul');
        tagUl.insertAdjacentHTML("beforeend", `<li><span>${input}</span><button id="btn">remove</button></li>`);

        
    })
    let butRemove = document.getElementById('btn');
    butRemove.addEventListener('click', ()=>{
        console.log('Remove');
    })
}

// 12.14: Mỗi lần nhấp vào nút ‘xóa’, hãy xác định chỉ mục của người được nhấp

{
    let list = ['Backpack','MiBand watch','Ring'];
    let button = document.getElementById('add_btn');
    let tagUl = document.getElementById('item_list_ul');

    tagUl.innerHTML = ''

    for(let i = 0 ;i < list.length; i++){
        tagUl.insertAdjacentHTML('beforeend',`<li><span>${list[i]}</span><button id="btn">remove</button></li>`);
    }

    button.addEventListener('click',()=>{
        let input = document.getElementById('item_input').value;
        console.log('Add button clicked');
        console.log(input);
        list.push(input);
        console.log(list)

        let tagUl = document.getElementById('item_list_ul');
        tagUl.insertAdjacentHTML("beforeend", `<li><span>${input}</span><button id="btn">remove</button></li>`);

        
    })
}
