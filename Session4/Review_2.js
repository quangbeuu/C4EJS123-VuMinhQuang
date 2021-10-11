// Câu 2: 

// Initialize a variable named products, containing an array of products, each product has a name, price, brand, category, and color


let products = [
    {
        id: 1,
        name: 'Xiaomi portable charger 20000mah', 
        brand: 'Xiaomi',
        price: 428, 
        color: 'white',
        category: 'charger'
    }, 
    {
        id: 2,
        name: 'VSmart Active 1', 
        brand: 'VSmart',
        price: 5487, 
        color: 'black',
        category: 'phone'
    }, 
    {
        id: 3,
        name: 'IPhone X', 
        brand: 'Apple',
        price: 21490, 
        color: 'gray',
        category: 'phone'
    }, 
    {
        id: 4,
        name: 'Samsung Galaxy A9', 
        brand: 'Samsung',
        price: 8490, 
        color: 'blue',
        category: 'phone'
    }, 
]

// a. In / ghi tên và giá của tất cả các sản phẩm ra

for(let i = 0; i < products.length; i++){
    console.log(`#${i+1}. Name: ${products[i]['name']}`);
    console.log(`Price: ${products[i].price}`);
}

// b. Viết script in / đăng xuất sản phẩm với số của chúng, sau đó in / đăng xuất thông tin chi tiết của sản phẩm với vị trí của sản phẩm do người dùng nhập

let position = prompt('Enter product position');
let {name, brand, price, color, category} = products[position-1];

console.log(`Name: ${name}`);
console.log(`Brand: ${brand}`);
console.log(`Price: ${price}`);
console.log(`Color: ${color}`);
console.log(`Category: ${category}`);

// c. Viết kịch bản in / đăng xuất sản phẩm dựa trên danh mục do người dùng nhập


let cate = prompt('Enter your category?');

for(let i = 0; i < products.length; i++){
    if(cate == products[i].category){
        console.log('------------------------------')
        console.log(`Name: ${products[i].name}`);
        console.log(`Price: ${products[i].price}`);
    }
}

// d. Thêm nhà provides vào mỗi produc 
// Và in / đăng xuất tất cả các sản phẩm

products[0].providers = 'Phukienzero Dientucc';
products[1].providers = 'Tgdd Ddghn VhStore';
products[2].providers = 'Tgdd';
products[3].providers = 'Tgdd';

for(let i = 0; i <products.length;i++){
    console.log(`#${i+1}. Name: ${products[i]['name']}`);
    console.log(`Price: ${products[i].price}`);
    console.log(`Providers: ${products[i].providers}`);
}

// e. 

// Tìm kiếm các sản phẩm dựa trên nhà cung cấp mong muốn do người dùng nhập, nếu bạn cần thêm hướng dẫn, 
// hãy tìm các gợi ý ở cuối bài tập về nhà này 

let provider = prompt('Enter provider');

for (let i = 0; i < products.length; i++){
    if(products[i].providers.includes(provider)){
        console.log('----------------------------------');
        console.log(`Name: ${products[i].name}`);
        console.log(`Brand: ${products[i].brand}`);
        console.log(`Price: ${products[i].price}`);
        console.log(`Color: ${products[i].color}`);
        console.log(`Category: ${products[i].category}`);
        console.log(`Providers: ${products[i].providers}`)
    }
}