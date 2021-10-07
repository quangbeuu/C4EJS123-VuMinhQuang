// 1. 
// Write a script to simulate a clothes shop, asking and performing certain tasks from users

// Note: If you want, though optional, you can make it more interesting by using alert instead of console.log to list the shop items

let items = ['Jeans', 'T-shirt', 'Socks'];
while(true){
    let option = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?');
    if(option == 'r' || option == 'R'){
        console.log('The current items are:')
        for (let i = 0; i < items.length; i++){
            console.log(`${i+1}. ${items[i]}`);
        }
    }else if(option == 'c' || option == "C"){
        newItem = prompt('Enter the name of the new item');
        items.push(newItem);
        alert('Done');
    }else if(option == 'u' || option == 'U'){
        indexU = prompt('Enter the position you want to update');
        updateItem = prompt('Enter the new name');
        items[indexU] = updateItem;
        alert('Done');
    }else if(option == 'd' || option == 'D'){
        indexD = prompt('Enter the position you want to delete');
        items.splice(indexD,1);
        alert('Done');
    }else{
        alert('This command is not supported');
        break
    }
}



