class Product {
    constructor(name){
        this.name = name;
    }
}

const product = new Product("McGregor")
console.log(product.name)
// output: McGregor

const product2 = new Product("Jon Jones")
console.log(product2.name)
// output: Jon Jones