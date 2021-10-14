// Câu 3: 

// tạo mảng để lưu trữ danh sách máy tính xách tay trong kho, dữ liệu như sau

const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7
    }
]


// 3.1:
// Dữ liệu trên là tốt để xử lý tất cả các máy tính xách tay như nhau, nhưng khi nói đến nhóm các mặt hàng theo thương hiệu, 
// nó nên được định hình lại như bên dưới. 
// Viết chương trình để thực hiện việc định hình lại từ khoảng không quảng cáo, từ bây giờ, hãy sử dụng dữ liệu được định hình 
// lại để xử lý

let brandList = [];

for (let laps of inventory){
    if(!brandList.includes(laps.brand)){
        brandList.push(laps.brand);
    }
}


let inventoryByBrand ={};
for (let x of brandList){
    inventoryByBrand[x] = [];
}

for(let i = 0; i < inventory.length;i++){
    const laptop = inventory[i];
    inventoryByBrand[laptop.brand].push(laptop);
}

console.log(inventoryByBrand);

// 3.2

// viết một chương trình để đếm các thế hệ của một thương hiệu nhất định trong khoảng không quảng cáo

// let brandLap = prompt('Which brand?');

// for(let brand in inventoryByBrand){
//     if(brandLap.toLowerCase() == brand.toLowerCase()){
//         alert(`There are ${inventoryByBrand[brand].length} generations of '${brand.toUpperCase()} in inventory'`);
//     }
// }


// 3.3 Thêm chi tiết khác trong thống kê

let listName = {}
for(let x of brandList){
    listName[x] = [];
}

for(let i = 0; i < inventory.length;i++){
    const laptop = inventory[i];
    listName[laptop.brand].push(laptop.name);
}
console.log(listName);


// let brandLap = prompt('Which brand?');

// for(let brand in inventoryByBrand){
//     if(brandLap.toLowerCase() == brand.toLowerCase()){
//         alert(`There are ${inventoryByBrand[brand].length} generations of '${brand.toUpperCase()} in inventory \n${listName[brand].join('\n')}`);
//     }
// }

// 3.4 
// Thêm ++ chi tiết trong thống kê (30000 + 9300 * 12 + 8600 * 2 => 158800)

let listTotal = {}
for(let x of brandList){
    listTotal[x] = [];
}

for(let i = 0; i < inventory.length;i++){
    const laptop = inventory[i];
    let sum = 0;
    sum += laptop.price*laptop.quantity;
    listTotal[laptop.brand].push(sum);
}

console.log(listTotal);

let listTotalAll = {};

for(let x of brandList){
    listTotalAll[x] = [];
}

for(let i = 0; i < inventory.length;i++){
    const laptop = inventory[i];
    let sum=0;
    for (let k = 0; k < listTotal[laptop.brand].length; k++){
        sum += listTotal[laptop.brand][k];
    }
    listTotalAll[laptop.brand].push(sum);
}


console.log(listTotalAll);


let brandLap = prompt('Which brand?');

for(let brand in inventoryByBrand){
    if(brandLap.toLowerCase() == brand.toLowerCase()){
        alert(`There are ${inventoryByBrand[brand].length} generations of '${brand.toUpperCase()} in inventory \n${listName[brand].join('\n')} \nWith total value: ${listTotalAll[brand][0]}K`);
    }
}
