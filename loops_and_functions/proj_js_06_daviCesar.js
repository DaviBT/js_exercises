/* ------------------------------------- */
// 41
// Usando um laço do-while, crie um programa que transforme um
// número decimal em binário.

// let numero = 10; // altere este valor para o número desejado
// let binario = "";
// do {
//     binario = (numero % 2) + binario;
//     numero = Math.floor(numero / 2);
// } while (numero > 0);
// console.log(`O número ${numero} em binário é ${binario}`);


/* resultado:
O número 0 em binário é 1010
*/


/* ------------------------------------- */
// 42
// Usando um laço for, crie um programa que transforme um número
// binário em decimal.

// let binario = "1010"; // altere este valor para o número binário
// let decimal = 0;
// for (let i = binario.length - 1, j = 0; i >= 0; i--, j++){
//     decimal += parseInt(binario[i] * Math.pow(2,j));
// }
// console.log(`O número  ${binario} em decimal é ${decimal}`);

/* resultado:
O número em decimal é 10
*/


/* ------------------------------------- */
// 43

// let numero = 12321;
// let reverso = 0; 
// let temp = numero;
// while (temp > 0){
//     let digito = temp % 10;
//     reverso = reverso * 10 + digito;
//     temp = Math.floor(temp / 10);
// } 
// // alteração do código feita por mim:
// if (numero == reverso){
//     console.log(`O número ${numero} é um palíndromo`)
// } else {
//     console.log(`O número ${numero} não é um palíndromo`)
// }

/* resultado:
O número 12321 é um palíndromo
*/


/* ------------------------------------- */
// 44
// Usando um laço do-while,
// crie um programa que imprima a soma
// de duas matrizes.

// let matriz1 = [
//     [1,2],
//     [3,4],
// ]; // altere estes valores para as matrizes desejadas
// let matriz2 = [
//     [5,6],
//     [7,8],
// ];
// let soma = [];
// let i = 0;
// do{ 
//     let j =0;
//     soma[i] = [];
//     do{
//         soma[i][j] = matriz1[i][j] + matriz2[i][j];
//         j++;
//     } while (j < matriz1[i].length);
//     i++;
// } while (i < matriz1.length);
//     console.log(`A soma das matrizes é ${JSON.stringify(soma)}`);


/* resultado:
A soma das matrizes é [[6,8],[10,12]]
*/


/* ------------------------------------- */
// 45
// Escreva uma função que imprima "Olá, Mundo!".

// function imprimirOlaMundo(){
//     console.log("Olá, mundo!");
// } 
// imprimirOlaMundo();

/* resultado:
Olá, mundo!
*/


/* ------------------------------------- */
// 46
// Escreva uma função que aceite dois números como argumentos e
// retorne sua soma.

// function somarNumeros(num1, num2) {
//     return num1 + num2;
// } 
// console.log(somarNumeros(3,4));

/* resultado:
7
*/


/* ------------------------------------- */
// 47

// function quadrado(num){
//     return num*num;
// }
// console.log(quadrado(5));

/* resultado:
25
*/


/* ------------------------------------- */
// 48
// Escreva uma função que aceite um número como argumento e
// retorne se ele é par ou ímpar.

function parOuImpar(num){
    if(num%2 === 0){
        return 'par';
    } else {
        return 'ímpar';
    }
}
console.log(parOuImpar(5))

/* resultado:
ímpar
*/


/* ------------------------------------- */
// 49
// Escreva uma função que aceite três números como argumentos e
// retorne o maior deles.

// function maiorNumero(num1,num2,num3){
//     return Math.max(num1, num2, num3);
// }
// console.log(maiorNumero(3,5,4))

/* resultado:
5
*/


/* ------------------------------------- */
// 50

function inverterString(str){
    return str.split('').reverse().join('');
}
console.log(inverterString('hello')); 

/* resultado:
olleh
*/


/* ------------------------------------- */
// 50



/* resultado:

*/


