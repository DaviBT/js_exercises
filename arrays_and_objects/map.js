// map() chama a funcao callback recebida por parametro. roda por cada item da array e cria uma array nova

const products = ["teclado", "cadeira"]

// percorre os items da array
products.map((item) => {
    console.log(item)
})
// teclado
// cadeira


// sintaxe reduzida
products.map((product) => console.log(product))
// teclado
// cadeira


// retornar array formatada
const formatted = products.map((product) => {
    // return product.toUpperCase()

    return {
        id: Math.random(),
        description: product
    }
})

console.log(formatted)
// [ 'TECLADO', 'CADEIRA' ]

// [
//   { id: 0.0021146006707006837, description: 'teclado' },
//   { id: 0.8845433669431857, description: 'cadeira' }
// ]

