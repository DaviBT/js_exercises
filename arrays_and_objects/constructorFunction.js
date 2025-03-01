// função construtora cria um objeto e retorna um objeto quando instanciada
// instância -> cópia do objeto na memória
// new -> cria uma instância, cria um objeto utilizando a estrutura da funcao construtora

function createProduct(name){
    const product = {};

    product.name = name
    product.details = function(){
        console.log(`o nome do produto é ${this.name}`);
    }
    return product;
}

const product1 = new createProduct("teclado");
console.log(product1.name);
console.log(product1.details())
// teclado
// o nome do produto é teclado


const product2 = new createProduct("cadeira");
console.log(product2.name);
createProduct(product2.details())
// cadeira
// o nome do produto é cadeira