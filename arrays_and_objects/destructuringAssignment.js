// desestruturação
// permite extrair dados de arrays ou objetos em variaveis distintas

const product = {
    description: "teclado",
    price: 150,
}

const {description, price} = product
console.log("descrição:", description) 
console.log("preço: R$", price)
// output: 
// descrição: teclado
// preço: R$ 150


function newProduct(
    {description, price}
) {
    console.log("### novo produto")
    console.log("descrição:", description) 
    console.log("preço: R$", price)
    
}

newProduct({
    price: 250,
    description: "chair" 
})
// output: 
// ### novo produto
// descrição: chair
// preço: R$ 250