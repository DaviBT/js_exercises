/* ------------------------------- */
// Tarefa 1
// Declare duas variáveis chamadas "idade" e "peso", atribua
// valores a elas e imprima os valores na console.

let idade = 25;
let peso = 70;

console.log("Idade: ", idade);
console.log("Peso: ", peso);

/* Resultado :
Idade:  25
Peso:  70
*/



// /* ------------------------------- */
// // Tarefa 2
// Declare uma constante chamada "PI", atribua o valor de Pi a
// ela e imprima o valor na console.

const PI = 3.14159;
console.log("PI: ", PI);

// /* Resultado :
// PI:  3.14159
// */



// /* ------------------------------- */
// // Tarefa 3
// Declare uma variável chamada "númeroMáximo", atribua a
// ela o valor máximo que um número pode ter em JavaScript e imprima o valor na console.

let numeroMaximo = Number.MAX_VALUE;
console.log("Número máximo: ", numeroMaximo);

// /* Resultado :
// 1.7976931348623157e+308
// */



/* ------------------------------- */
// Tarefa 4
// Declare duas variáveis chamadas "nome" e "sobrenome",
// atribua o seu nome e sobrenome a elas. Concatene-as em uma
// terceira variável chamada "nomeCompleto" e imprima.

let nome = "João";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;

console.log("Nome completo: ", nomeCompleto);

/* Resultado :
Nome completo:  João Silva
*/



/* ------------------------------- */
// Tarefa 5
// Declare duas variáveis e atribua valores numéricos a elas.
// Use o operador de adição para realizar operações entre as duas variáveis. Imprima o resultado.

let num1 = 10;
let num2 = 20;

let soma = num1 + num2
console.log("Soma: ", soma);


/* Resultado :
Soma:  30
*/



/* ------------------------------- */
// Tarefa 6
// Declare duas variáveis e atribua valores booleanos a elas.
// Use os operadores lógicos AND, OR e NOT para realizar operações
// lógicas entre as variáveis. Imprima os resultados.
// Lembrando que os operadores lógicos são: &&, || e !

let bool1 = true;
let bool2 = false;

console.log("AND: ", bool1 && bool2)
console.log("OR: ", bool1 || bool2)
console.log("NOT: ", !bool1)


/* Resultado :
AND:  false
OR:  true
NOT:  false
*/



/* ------------------------------- */
// Tarefa 7
// Declare três variáveis e atribua valores numéricos a elas. Use operadores de comparação para comparar os valores entre as
// variáveis. Imprima os resultados.

let num1 = 10;
let num2 = 20;
let num3 = 30;

console.log("num1 < num2: ", num1 < num2)
console.log("num2 > num3", num2 > num3)
console.log("num1 == num3: ", num1 == num3)


/* Resultado :
num1 < num2:  true
num2 > num3 false
num1 == num3:  false
*/



/* ------------------------------- */
// Tarefa 8
// Declare uma variável e atribua um valor numérico a ela. Use
// o operador de incremento para aumentar o valor da variável. Imprima o resultado.

let num = 10;
num++;

console.log("Número incrementado: ", num);

/* Resultado :
Número incrementado:  11
*/



/* ------------------------------- */
// Tarefa 9
// Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.

function verificarNumero(num) {
    if (num > 0) {
        console.log("O número é positivo");
    } else if (num < 0){
        console.log("O número é negativo");
    } else {
        console.log("O número é zero");
    }
}

verificarNumero(10) // Imprime: o número é positivo
verificarNumero(-5)// Imprime: o número é negativo
verificarNumero(0)// Imprime: o número é zero


/* Resultado :
O número é positivo
O número é negativo
O número é zero
*/



/* ------------------------------- */
// Tarefa 10
// Escreva um programa que recebe duas notas de um aluno,
// calcula a média e imprime se o aluno foi aprovado ou reprovado
// (considerando que a média para aprovação é 7).

function calcularMedia(nota1, nota2) {
    var media = (nota1 + nota2) /2;
    if (media >= 7) {
        console.log("Aluno aprovado com a média: " + media);
    } else {
        console.log("Aluno reprovado com a média: " + media)
    }
}

calcularMedia(8, 6)
calcularMedia(5, 6)


/* Resultado :
Aluno aprovado com a média: 7
Aluno reprovado com a média: 5.5
*/