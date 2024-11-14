const input=require("readline-sync")


// Read Operation:Write a function to retrieve all films directed by a specific director. For instance, retrieve all films directed by "Steven Spielberg".
// Update Operation: You need to update the rating of a film in the array of film objects. Write a function that updates the rating of a film with a specific title.
// For example, update the rating of the film "The Matrix" to 9.0.
// Delete Operation:Write a function to remove a film from the array based on its title. For example, remove the film "Avatar" from the array of films.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// function mainFunction(){
    
// console.log("press 1 for read property = ");
// console.log("press 2 for update preperty = ");
// console.log("press 3 for delete the property = ");

// const films = [ 
// { title: 'Jurassic Park', director: 'Steven Spielberg', releaseYear: 1993, genre: 'Adventure', rating: 8.1 }, 
// { title: 'E.T.', director: 'Steven Spielberg', releaseYear: 1982, genre: 'Science Fiction', rating: 7.8 }, 
// { title: 'Jaws', director: 'Steven Spielberg', releaseYear: 1975, genre: 'Thriller', rating: 8.0 } ,
// { title: 'The Matrix', director: 'Wachowskis', releaseYear: 1999, genre: 'Science Fiction',    rating: 8.7 },
// { title: 'Avatar', director: 'James Cameron', releaseYear: 2009, genre: 'Science Fiction', rating: 7.8 },
//  { title: 'Titanic', director: 'James Cameron', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
//  { title: 'Titanic', director: 'shabnam', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
// ]; 



// let choice=input.questionInt("enter the number = ")
// if(choice==1){
// readProperty(films)
// }

// if(choice==2){
//  updateproperty(films)
// }

// if(choice==3){
//     deleteproperty(films)
// }

// }


// function readProperty(films){
//     let findname=input.question("enter the name = ")
//     for(let key of films){
//       // console.log(key);
//     if(findname==key.director){
//       console.log(key)

      
//     }
//     }
//     wanttoContinue()

// }




// function updateproperty(films){
//     let filmname=input.question("enter the name = ")
//  let   newrating=input.questionInt("enter the rate = ")
//  let updatetitem=[]

//     for(let key of films){
//         if(key.title==filmname){
//             key.rating=newrating
//             updatetitem.push(key)
            
//           }
//         }
//         if(updatetitem.length==0){
//           console.log('title is not found for ', filmname);
//         }
//     console.log((updatetitem));
//     wanttoContinue()

// }


// function deleteproperty(films){
//     let Array=[]
//     let filmname=input.question("enter the film name = ")
//   for(let key of films){
//     if(filmname==key.title){
//         continue;
//     }
//     else{
//         Array.push(key)
//     }
//   }
//     console.log(Array);
//     wanttoContinue()

// }



// function wanttoContinue(){
//     let again=input.questionInt("do you want to continue then enter the number 1  = ")
//     if(again==1){
//      mainFunction()
//     }

// }

// mainFunction()




////////////////////////////////////////////////////////

// Write a function that:
// Traverses the entire company structure to calculate the total number of employees, including all sub-departments.
// Transforms the structure into a flat array of department names along with their employee counts.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const companyStructure = {name: 'TechCorp',
//     departments: [{name: 'Engineering',employees: 150,
//     subDepartments: [{ name: 'Software', employees: 100 },
//                     { name: 'Hardware', employees: 50 }]
//         },
//         {
//             name: 'Sales',
//             employees: 80,
//             subDepartments: []
//         }
//     ]
// };

// function totalcount(companyStructure){
//     let sum=0;
//     for(let key in companyStructure){
    
//         for(let dpt of companyStructure.departments){
//             sum=sum+dpt.employees
            
//             for(let subdpt in companyStructure.subDepartments){
        
//                 sum=sum+subdpt.employees
//             }
//         }
//     }
//     console.log(sum);
       
// }
// totalcount(companyStructure)



///////////////////////////////////////////////////////////

// Write a function that:
// Allows updating a specific post’s content by its id.
// Ensures that the original userProfile object remains unchanged after the update.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


const userProfile = {
    username: 'techguru',
    posts: [{ id: 1, content: 'Hello World' }, { id: 2, content: 'JavaScript Rocks!' }],
    friends: ['coder123', 'devmaster'],
    settings: { theme: 'dark', notifications: true }
};

function updatetheContant(userProfile){
for(let key of userProfile){
    console.log(key);
    for(let item in userProfile.posts){
        if(Newid==item.id){
            item.content=NewContant
            console.log(userProfile);
        }
    }
    
}
}
let Newid=input.questionInt("enter the new id = ")
let NewContant=input.question("enter the new content = ")
updatetheContant(userProfile)

/////////////////////////////////////////

// Write a function that:
// Filters out students who have an average grade below 80.
// Maps the remaining students to a new array of objects containing only their name and average grade.
// Returns the final array of filtered and mapped student objects.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// const students = [
//     { name: 'John', grades: { math: 85, science: 92, history: 78 } },
//     { name: 'Jane', grades: { math: 95, science: 88, history: 90 } },
//     { name: 'Bob', grades: { math: 70, science: 75, history: 65 } }
// ];

// function averageGrade(students){
//     let sum=0;
//     for(let key of students){

//         for(let item in key.grades){
//             sum=sum+key.grades[item]
//         }
//         console.log(sum/3);

//     }
// }

// averageGrade(students)

