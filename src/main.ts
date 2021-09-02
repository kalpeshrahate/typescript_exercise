// CREATING OBJECTS
// Comment added by kalpesh
// // method #1
// const user = {
//     name: 'prasad',
//     age: 25,
// };

// const user2 = {
//     name: 'prasad',
// };


// // method #2
// const user: {name:string; age:number} = {
//     name: 'prasad',
//     age: 25,
// };

// const user2:{name:string; age:number} = {
//     name: 'prasad',
// };


// // method #3
// // WITH INTERFACES IN TSC
// interface User{
//     name:string; 
//     age:number
// }

// const user: User = {
//     name: 'prasad',
//     age: 25,
// };

// const user2: User = {
//     name: 'prasad',
// };

// method #4
// WITH INTERFACES IN TSC
// INTERFACES HAS BEST AUTOCOMPLETE
interface User{
    name:string; 
    age?:number // NOT MADNATORY "?"
}

const user: User = {
    name: 'prasad',
    age: 25,
};

const user2: User = {
    name: 'prasad',
};

console.log(user.age)
