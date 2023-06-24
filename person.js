// using CommonJS

// let person = {
//     firstName: "Mary",
//     lastName: "Lautz",
//     age:25,
//     favoriteColor:"White"
// }

// //something else.

// let array = [1,2,3,4]

// function sums(num1, num2){
//     console.log(`This is the sums function`)
//     return num1 + num2
// }

// module.exports = {
//     sums: sums,
//     person: person,
//     array: array
// };

// ES6 Modules

let person = {
    firstName: "Mary",
    lastName: "Lautz",
    age:25,
    favoriteColor:"White"
}

//something else.

let array = [1,2,3,4]

function sums(num1, num2){
    console.log(`This is the sums function`)
    return num1 + num2
}

export {array, sums, person}
// export default person;
