// spread (espalhar) -> permite que um obj iteravel, como uma expressao de array ou uma string seja expandido.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// non spread
console.log(numbers)
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

// spread
console.log(...numbers)
// output: 1 2 3 4 5 6 7 8



const person = [{
    name: 'John',
    age: 30
}]

console.log(person)
// [ { name: 'John', age: 30 } ]


console.log(...person)
// { name: 'John', age: 30 }