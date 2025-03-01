const myName = new String("Conor")
console.log(myName)
// [String: 'Conor']

let price = "20.50".replace(".", ",")
console.log(price)
// 20,50

let date = new Date("2024-12-1")
console.log(date)
// 2024-12-01T03:00:00.000Z



function Person(name) {
    this.name = name
    this.message = function(){
        console.log(`Olá ${name}`)
    }
}

const Person1 = new Person(("McGregor"))
Person1.message()