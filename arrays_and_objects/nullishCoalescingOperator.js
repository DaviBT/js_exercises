// O Nullish Coalescing Operator / Operador de coalescência nula (??) é um operador do JavaScript usado para fornecer um valor padrão quando uma variável é null ou undefined. Diferente do operador lógico ||, ele não considera valores como 0, "" (string vazia) ou false como falsos.

let content = null;
console.log(content ?? "variável nula");
// variável vazia


let message = "tem uma mensagem aqui"
console.log(message ?? "variável nula")
// tem uma mensagem aqui


let boolean = true;
console.log(boolean ?? "variável nula");
// true


let und = undefined;
console.log(und ?? "variável undefined");
// variável undefined


const user = {
    name: "John Doe",
    image: undefined,
}

console.log(user.image ?? "default.jpeg")
