// Câu 4: 
// Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). 
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete).


let staffs = [
    {
        name: "Trang",
        age: 18,
        salary: 1000,
        job: 'designer'
    },
    {
        name: "Quang",
        age: 18,
        salary: 800,
        job: 'front-end developer'
    },
    {
        name: "Thom",
        age: 18,
        salary: 1200,
        job: 'B.A'
    }
]
while(true){
    let option = prompt('Enter your option(Read, Create, Update, Delete, Stop)');

    if(option == "read" || option == "Read"){
        for(let i = 0; i < staffs.length;i++){
            console.log("Staff's Information");
            console.log(`Name: ${staffs[i].name}`);
            console.log(`Age: ${staffs[i].age}`);
            console.log(`Salary: ${staffs[i].salary}`);
            console.log(`Job: ${staffs[i].job}`);
            console.log('-------------------------------')
        }
    }

    let newStaff = {}
    if(option == 'create' || option == 'Create'){
        let newName = prompt("Enter staff's name");
        let newAge = prompt("Enter staff's age");
        let newSalary = prompt("Enter staff's salary");
        let newJob = prompt("Enter staff's job");
        alert('Done');
        newStaff.name = newName;
        newStaff.age = newAge;
        newStaff.salary = newSalary;
        newStaff.job = newJob;
        staffs.push(newStaff);
        for(let i = 0; i < staffs.length;i++){
            console.log("Staff's Information");
            console.log(`Name: ${staffs[i].name}`);
            console.log(`Age: ${staffs[i].age}`);
            console.log(`Salary: ${staffs[i].salary}`);
            console.log(`Job: ${staffs[i].job}`);
            console.log('-------------------------------')
        }
    }

    if(option == 'update' || option == 'Update'){
        let position = prompt('Enter position');
        let upName = prompt("Enter staff's name");
        let upAge = prompt("Enter staff's age");
        let upSalary = prompt("Enter staff's salary");
        let upJob = prompt("Enter staff's job");

        staffs[position].name = upName;
        staffs[position].age = upAge;
        staffs[position].salary = upSalary;
        staffs[position].job = upJob;
        for(let i = 0; i < staffs.length;i++){
            console.log("Staff's Information");
            console.log(`Name: ${staffs[i].name}`);
            console.log(`Age: ${staffs[i].age}`);
            console.log(`Salary: ${staffs[i].salary}`);
            console.log(`Job: ${staffs[i].job}`);
            console.log('-------------------------------')
        }
    }

    if (option == 'delete' || option == 'Delete'){
        let positionDel = prompt('Enter position delete');

        staffs.splice(positionDel,1);
        alert('Delete successfully')
        for(let i = 0; i < staffs.length;i++){
            console.log("Staff's Information");
            console.log(`Name: ${staffs[i].name}`);
            console.log(`Age: ${staffs[i].age}`);
            console.log(`Salary: ${staffs[i].salary}`);
            console.log(`Job: ${staffs[i].job}`);
            console.log('-------------------------------')
        }
    }

    if(option == 'stop' || option == 's' || option == 'Stop'){
        alert('See you again')
        break;
    }
}
