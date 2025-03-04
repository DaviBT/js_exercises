const data = ["Abel Ferreira", "abel@gmail.com"]

const [username, email] = data

console.log(username, email)
// output: Abel Ferreira abel@gmail.com


const fruits = ["banana", "grape", "orange"]
const [,,citric] = fruits

console.log(citric)
// output: orange