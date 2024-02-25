/*
 * author : Davi Cesar
 *
 */

// console.log("olá mundo")
// console.log("olá mundo")
// console.log("olá mundo")
// console.log("olá mundo")

// alert("this is a alert");

/*
var olaMundo = "olá mundo";
console.log(olaMundo);
console.log(olaMundo);
console.log(olaMundo);
console.log(olaMundo);
*/

// let a = 10;
// const b = 20;

// console.log(a == b); // não são iguais = false; valida o conteúdo

// let a = 10;
// const b = "10";
// console.log(a == b); // true; validou o conteúdo, não o tipo de dado


// let a = 10;
// const b = "10";
// console.log(a === b); // false; compara o valor e o tipo de dado

// let a = 10;
// const b = "10";
// console.log(a !== b); // true; são diferentes, tanto o valor, quanto também o tipo de dado 

// let a = 10;
// const b = "10";
// console.log(a != b); // false; compara os valores, ignorando o tipo

// let a = 10;
// const b = "10";
// console.log(a == b && typeof b == 'string'); // true; o conteúdo é igual, e o tipo de dado do 'b' é uma string

// let a = 10;
// const b = "10";
// console.log(a == b && typeof a == 'string'); // false; 'a' não é uma string

// let a = 10;
// const b = "10";
// console.log(a == b || typeof a == 'string'); // true

// let a = 10;
// const b = "10";
// console.log(a == b || typeof a == 'string');

// let cor = "verde";
// if (cor === "verde") {
//     console.log("siga");
// } else {
//     console.log("pare");
// } // siga = a cor é verde

// let cor = "vermelho";
// if (cor === "verde") {
//     console.log("siga");
// } else {
//     console.log("pare");
// } // pare; cor = vermelho

// let cor = "amarelo";
// if (cor === "verde") {
//     console.log("siga");
// } else if (cor === "amarelo") {
//     console.log("atenção");
// } else {
//     console.log("pare");
// } // pare; cor = amarelo

// let cor = "azul";
// if (cor === "verde") {
//     console.log("siga");
// } else if (cor === "amarelo") {
//     console.log("atenção");
// } else if (cor === "vermelho"){
//     console.log("pare");
// } // não executa

let n = 5;
for (let i = 0; i <= 10; i++){
    console.log(`${i} X ${n} = ${i*n}`);
}