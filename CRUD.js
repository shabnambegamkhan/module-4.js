
const input = require('readline-sync');


var data1=[]
function create() {
    let name = input.question('Enter your name : ');
    let mobile = input.questionInt('Enter your mobile : ');
    let email = input.question('Enter your email : ');
    let password = input.question('Enter your password : ');
    let data = {
        name: name,
        mobile: mobile,
        email: email,
        password: password
    }
    data1.push(data)
    console.log('Your Data is Create ',data1);
    return data1;
}



function readdata(data){
    console.log('Your Data is read',data);
    let option1 = input.questionInt('Do you want to search data :- \n\t\t\t1.Single Data\n\t\t\t2.See All Data\nEnter your choice : ');
    if (option1 === 1) {
        let search = input.questionInt('Enter your mobile : ');
        let found = false;
        for (let i = 0; i < data.length; i++){
            if (data[i].mobile === search) {
                console.log('Your search data is :- ', data[i]);
                found = true;
                break;
            }
        }
        if (!found) {
            console.log("No data found for the given mobile number. Try Again.");
        }
    }
    else if (option1 === 2){
        console.log('Your All Data is :- ',data);
    }
    else{
        console.log('Invalid choice');
    }
}


function update(data) {
    console.log('Your data is being updated.');
    let mobile = input.questionInt('Enter the mobile number of the data you want to update: ');
    let found = false;


    for (let i = 0; i < data.length; i++) {
        if (data[i].mobile === mobile) {
            let choice = input.questionInt('What do you want to update:\n\t\t\t1. Name\n\t\t\t2. Email\n\t\t\t3. Password\nEnter your choice: ');


            switch (choice) {
                case 1:
                    let newName = input.question('Enter the new name: ');
                    data[i].name = newName;Jurassic Park
                    console.log('Name updated successfully.');
                    break;
                case 2:
                    let newEmail = input.question('Enter the new email: ');
                    data[i].email = newEmail;
                    console.log('Email updated successfully.');
                    break;
                case 3:
                    let newPassword = input.question('Enter the new password: ');
                    data[i].password = newPassword;
                    console.log('Password updated successfully.');
                    break;
                default:
                    console.log('Invalid choice');
                    break;
            }
            found = true;
            break;
        }
    }

    
    if (!found) {
        console.log("No data found for the given mobile number. Try Again.");
    }
}
create()

readdata(data1)

update(data1)

