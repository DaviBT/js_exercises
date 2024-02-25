/* ----------------------------------------*/
//71
//Crie um objeto vazio e adicione três propriedades a ele, cada
// uma com diferentes tipos de valores.

// let obj = {} // criação do objeto vazio

// obj.numero = 10; // adicionanco uma propriedade numerica
// obj.texto = "Olá, Mundo!"; // adicionando uma propriedade string
// obj.booleano = true; // adicionando uma propriedade booleana

// console.log(obj)

/*resultado:
Object
booleano
: 
true
numero
: 
10
texto
: 
"Olá, Mundo!"
[[Prototype]]
: 
Object
*/



/* ----------------------------------------*/
//72
//Crie um objeto que represente um livro, com propriedades para o
// título, autor e número de páginas. Em seguida, adicione um método ao
// objeto que imprima uma descrição do livro.

// let livro = {
//     titulo: "O Hobbit",
//     autor: "J.R.R. Tolkien",
//     numeroDePaginas: 310,

//     descricao: function (){
//         console.log(
//             `O livro ${this.titulo}, escrito por ${this.autor}, tem ${this.numeroDePaginas} páginas.`
//         );
//     },
// };
// livro.descricao(); 

/*resultado:
O livro O Hobbit, escrito por J.R.R. Tolkien, tem 310 páginas.
*/


/* ----------------------------------------*/
//73
//Crie um objeto "cachorro" com propriedades para raça, nome e
// idade. Adicione um método que retorne a idade do cachorro em anos
// humanos (idade do cachorro * 7).

// let cachorro = {
//     raca: "Labrador",
//     nome: "Rex",
//     idade: 3,

//     idadeEmAnosHumanos: function(){
//         return this.idade * 7;
//     },
// }
// console.log(cachorro.idadeEmAnosHumanos())

/*resultado:
21
*/



/* ----------------------------------------*/
//74
//Crie um objeto que
// represente um carro, com propriedades
// para a marca, modelo, ano e
// velocidade atual, e os seguintes
// métodos: acelerar, frear e obter
// velocidade atual.

// let carro = {
//     marca: "Ford",
//     modelo: "Mustang",
//     ano: 1969,
//     valocidadeAtual:0,

//     acelerar: function(){
//         this.velocidadeAtual += 10;
//     },

//     frear: function(){
//         this.velocidadeAtual -= 10.
//         if (this.velocidadeAtual < 0){
//             this.velocidadeAtual = 0;
//         }
//     },
//     obterVelocidadeAtual: function(){
//         return this.velocidadeAtual;
//     },
// };

// carro.acelerar()
// console.log(carro.obterVelocidadeAtual());

// carro.frear()
// console.log(carro.obterVelocidadeAtual());

/*resultado:
NaN
NaN
*/


/* ----------------------------------------*/
//75
//Crie um objeto que represente um estudante, com propriedades
// para o nome, notas de várias matérias e um método para calcular a média das

// let estudante = {
//     nome: "João",
//     notas: [10,8,9,7],

//     calcularMedia: function(){
//         let soma = 0;
//         for (let i = 0; i < this.notas.length; i++){
//             soma += this.notas[i];
//         }
//         return soma / this.notas.length;
//     },
// };
// console.log(estudante.calcularMedia())

/*resultado:
8.5
*/


/* ----------------------------------------*/
//76
//Crie um objeto
// representando uma conta bancária,
// que possui uma propriedade de
// saldo e métodos para depósito e
// saque.

// let contaBancaria = {
//     saldo:1000,

//     depositar: function(valor){
//         this.saldo += valor;
//     },

//     sacar: function(valor){
//         if(valor<=this.saldo){
//             this.saldo -= valor;
//         } else {
//             console.log("saldo insulficiente.");
//         }
//     },

//     obterSaldo: function(){
//         return this.saldo;
//     },
// };

// contaBancaria.depositar(500);
// console.log(contaBancaria.obterSaldo());

// contaBancaria.sacar(200);
// console.log(contaBancaria.obterSaldo());


/*resultado:
1500
1300
*/


/* ----------------------------------------*/
//77
//Crie um objeto "circulo" que possui uma propriedade de raio e dois
// métodos que calculam a área e a circunferência.

// let circulo = {
//     raio: 5,

//     calcularArea:function(){
//         return Math.PI * Math.pow(this.raio, 2);
//     },

//     calcularCircuferencia: function(){
//         return 2 * Math.PI * this.raio;
//     },
// };

// console.log(circulo.calcularArea());
// console.log(circulo.calcularCircuferencia());

/*resultado:
78.53981633974483
31.41592653589793
*/



/* ----------------------------------------*/
//78
//Crie um objeto "tempo" que possui propriedades para horas,
// minutos e segundos, e um método para converter o tempo para segundos.

// let tempo = {
//     horas: 2,
//     minutos: 30,
//     segundos: 15,

//     converterParaSegundos: function(){
//         return this.horas * 3600 + this.minutos * 60 + this.segundos;
//     },
// };
// console.log(tempo.converterParaSegundos())

/*resultado:
9015
*/


/* ----------------------------------------*/
//79
//Crie um objeto "retangulo" que possui propriedades para altura e
// largura, e um método para calcular a área.

// let retangulo = {
//     altura: 5,
//     largura:10,

//     calcularArea: function(){
//         return this.altura * this.largura;
//     },
// };
// console.log(retangulo.calcularArea())

/*resultado:
50
*/



/* ----------------------------------------*/
//80
//Crie um objeto "quadrado" que herda as propriedades do objeto
// "retangulo" e substitua o método para calcular a área.

// let quadrado = Object.create(retangulo);

// quadrado.largura = 5;

// quadrado.altura = 5;

// quadrado.calcularArea = function () {
// return this.largura * this.largura;
// };

// console .log(quadrado.calcularArea()); 
/*resultado:
25
*/



/* ----------------------------------------- */
// 81
//Crie um objeto "livro" que possui propriedades para o título, autor e
// número de páginas, e um método para exibir o livro na console.

// let livro = {
//   titulo: "1984",
//   autor: "George Orwell",
//   paginas: 328,

//   exibirLivro: function(){
//     console.log(
//       this.titulo +
//       ", escrito por " +
//       this.autor +
//       ", com " +
//       this.paginas +
//       " páginas"
//     )
//   }
// };
// livro.exibirLivro();

/* resultado 
1984, escrito por George Orwell, com 328 páginas
*/



/* ----------------------------------------- */
// 82
//Dado dois arrays, um com vários números pares e outro com
// números ímpares, combine-os e, em seguida, filtre apenas os números que são
// múltiplos de 5.

// function combineAndFilter(pares, impares){
//   return pares.concat(impares).filter((num) => num%5 === 0);
// }
// const pares = [2,4,10,12,20];
// const impares = [1,3,5,15,25];
// console.log(combineAndFilter(pares,impares));

/* resultado 
[10, 20, 5, 15, 25]
*/



/* ----------------------------------------- */
// 83
//Dado um array de preços de produtos, calcule o preço total após
// adicionar 10% de imposto a cada produto usando map(), e depois somando
// tudo com reduce().

// function calculateTotalWihTax(prices){
//   return prices
//     .map((price) => price * 1.1)
//     .reduce((acc,curr) => acc + curr, 0);
// }
// const prices = [10,20,30,40];
// console.log(calculateTotalWihTax(prices));

/* resultado 
110
*/



/* ----------------------------------------- */
// 84
// Dada uma string com várias palavras separadas por espaços,
// transforme-a em um array e depois retorne a palavra mais longa.

// function longestWord(string){
//   return string 
//     .split(" ")
//     .reduce((acc, curr) => (curr.length > acc.length ? curr : acc), "");
// }
// const sentence = "Essa frase tem muitas palavras, qual é a maior?";
// console.log(longestWord(sentence));

/* resultado 
palavras,
*/



/* ----------------------------------------- */
// 85
//Dado um array que contém vários elementos duplicados, crie uma
// função que remova todas as duplicatas e retorne um array com elementos
// únicos.

// function removeDuplicates(arr){
//   return [...new Set(arr)]
// }
// const numbers = [1,2,3,2,2,4,3,5,6,7,5,8]
// console.log(removeDuplicates(numbers))

/* resultado 
[1, 2, 3, 4, 5, 6, 7, 8]S
*/



/* ----------------------------------------- */
// 86
//Dado um array de strings, ordene-o em ordem decrescente com base
// no comprimento de cada string.

// function sortByStringLength(arr){
//   return arr.sort((a,b) => b.length - a.length)
// }
// const words = ["apple", "banana", "cherry", "date", "elerberry"]
// console.log(sortByStringLength(words))

/* resultado 
['elerberry', 'banana', 'cherry', 'apple', 'date']
*/



/* ----------------------------------------- */
// 87
//Você deve criar uma função que aceite um array de números e
// retorne a mediana.

// function findMedian(arr) {
//   arr.sort((a,b) => a-b)
//   const middle = Math.floor(arr.length  / 2)
//   if(arr.length % 2 === 0){
//     return (arr[middle - 1] + arr[middle]) / 2;
//   }
//   return arr[middle];
// }
// const numbers = [5,2,9,1,5,6];
// console.log(findMedian(numbers))

/* resultado 
5
*/



/* ----------------------------------------- */
// 88
// Dado um array de strings e um número n, retorne um novo array
// contendo apenas as strings que têm mais de n caracteres.

// function filterByStringLength(arr, n){
//   return arr.filter((word) => word.length > n);
// }
// const words = ["apple", "banana", "cherry", "date", "elerberry"]
// console.log(filterByStringLength(words, 5))

/* resultado 
['banana', 'cherry', 'elerberry']
*/



/* ----------------------------------------- */
// 89
// Dado dois arrays, retorne um novo array que é a concatenação dos
// dois.

// function concatenateArrays(arr1,arr2){
//   return arr1.concat(arr2);
// }
// const firstArray = [1,2,3];
// const secondArrray = [4,5,6];

// console.log(concatenateArrays(firstArray, secondArrray));

/* resultado 
[1, 2, 3, 4, 5, 6]
*/



/* ----------------------------------------- */
// 90
//Dado dois arrays, verifique se o segundo array é um subarray do
// primeiro.

function isSubarray(mainArray,subArray){
  return mainArray.join(",").includes(subArray.join(","));
}
const mainArr = [1,2,3,4,5];
const subArr1 = [2,3,4];
const subArr2 = [2,4,5];

console.log(isSubarray(mainArr, subArr1));
console.log(isSubarray(mainArr, subArr2));

/* resultado 
true
false
*/