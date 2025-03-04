// filter() -> cria uma nova array com todos os elementos que passarem na condicao

const words = ["javascript", "html", "css", "web"]

const result = words.filter((word) => word.length > 3)
console.log(result)
// [ 'javascript', 'html' ]



const products = [
    {name: "teclado", price: 250},
    {name: "cadeira", price: 300},
    {name: "mouse", price: 50},
]

const promotion = products.filter((product) => product.price <= 250)
console.log(promotion)
// [ { name: 'teclado', price: 250 }, { name: 'mouse', price: 50 } ]