// O Optional Chaining (?.) é um recurso do JavaScript que permite acessar propriedades de objetos de forma segura, evitando erros quando uma propriedade ou método não existe.

let user = {
    name: "John Doe",
    age: 30,
    address: {
        // street: "123 Main St",
        // city: "New York",
        // state: "NY"
    },
    message: function(){
        console.log(`Hello, my name is ${this.name}!`);
    }
}

console.log(user.address?.street)
// undefined

// nao sei se a propriedade street vai estar preenchida, já que é um dado opcional. 
// colocar uma ? antes da propriedade opcional

user.message?.()