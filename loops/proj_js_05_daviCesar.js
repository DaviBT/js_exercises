/* ------------------------- */ 
// 31
// let min = 1;
// let max = 100;
// let chute = Math.floor((max+min) / 2);
// let numeroPensado = 50

while (chute !== numeroPensado){
    if(chute > numeroPensado){
        max = chute;
    }else {
        min = chute
    }
    chute = Math.floor((max+min) /2);
}
console.log("O número pensado é " + chute);
/* resultado:
O número pensado é 50
*/




/* ------------------------- */ 
// 32

let escolhaUsuario = "pedra";
let escolhaComputador;
let resultado;
do{
    let aleatorio = Math.floor(Math.random() *3);
    switch(aleatorio){
        case 0:
            escolhaComputador = "pedra";
            break;
        case 1:
            escolhaComputador = "papel";
            break;
        default:
            escolhaComputador = "tesoura";
    }

    if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        resultado = "Usuário ganhou!";
    } else if (escolhaUsuario === escolhaComputador){
        resultado = "Empate!";
    } else {
        resultado = "computador ganhou!";
    } 
    console.log(
        "usuário: " +
        escolhaComputador +
        " - Computador: " +
        escolhaComputador +
        "- Resultado: "+
        resultado
    );
} while (resultado === "Empate!");
do{
    let aleatorio = Math.floor(Math.random() * 3);
    switch (aleatorio) {
        case 0:
            escolhaComputador = "pedra";
            break;
        case 1:
            escolhaComputador = "papel";
            break;
        default:
            escolhaComputador = "tesoura";

    }


if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
) {
    resultado = "Usuário ganhou!";
} else if (escolhaUsuario === escolhaComputador){
    resultado = "Empate!";
} else{
    resultado = "Computador ganhou!";
}
    console.log(
        "Usuário: " +
        escolhaUsuario +
        " - computador: " +
        escolhaComputador +
        " - resultado: " +
        resultado
    );
    } while (resultado === "Empate!");



/* resultado:
Usuário: pedra - computador: papel - resultado: Computador ganhou!
*/



/* ------------------------- */ 
/* 33 - Usando um laço for, imprima os primeiros 10 números da sequência
de Fibonacci.*/

let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);
for(let i = 2; i < 10; i++){
    let nextNum = num1 + num2;
    console.log(nextNum);
    num1 = num2;
    num2 = nextNum;
}


/* resultado:
0
 1
 1
 2
 3
 5
 8
 13
 21
 34
*/



/* ------------------------- */ 
// 34 - Usando um laço while, imprima os números de 1 a 100, mas para
// múltiplos de 3 imprima "Fizz" e para múltiplos de 5 imprima "Buzz". Para
// números que são múltiplos de ambos, imprima "FizzBuzz" (Problema FizzBuzz).

let num = 1;
while(num <= 100){
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0){
        console.log("Fizz");
    } else if (num % 5 === 0){
        console.log("Buzz");
    } else {
        console.log (num);
    }
    num++;
}

/* resultado:
1
 2
 Fizz
 4
 Buzz
 Fizz
 7
 8
 Fizz
 Buzz
 11
 Fizz
 13
 14
 FizzBuzz
 16
 17
 Fizz
 19
 Buzz
 Fizz
 22
 23
 Fizz
 Buzz
 26
 Fizz
 28
 29
 FizzBuzz
 31
 32
 Fizz
 34
 Buzz
 Fizz
 37
 38
 Fizz
 Buzz
 41
 Fizz
 43
 44
 FizzBuzz
 46
 47
 Fizz
 49
 Buzz
 Fizz
 52
 53
 Fizz
 Buzz
 56
 Fizz
 58
 59
 FizzBuzz
 61
 62
 Fizz
 64
 Buzz
 Fizz
 67
 68
 Fizz
 Buzz
 71
 Fizz
 73
 74
 FizzBuzz
 76
 77
 Fizz
 79
 Buzz
 Fizz
 82
 83
 Fizz
 Buzz
 86
 Fizz
 88
 89
 FizzBuzz
 91
 92
 Fizz
 94
 Buzz
 Fizz
 97
 98
 Fizz
 Buzz
*/



/* ------------------------- */ 
// 36
//Usando um laço for, imprima os primeiros 10 números triangulares
// (n*(n+1)/2).

for (let n = 1; n <= 10; n++){
    let triangular = (n * (n + 1)) / 2;
    console.log(triangular);
}


/* resultado:
1
3
6
10
15
21
28
36
45
55
*/



/* ------------------------- */ 
// 36
// Usando um laço for, imprima todos os números perfeitos de 1 a 100
// (um número é perfeito se a soma de seus divisores, incluindo 1 mas não ele
// mesmo, é igual ao próprio número).

for (let i = 1; 1<= 100; i++){
    let soma = 0;
    for (let j = 1; j < i; j++){
        if (i % j === 0){
            soma += j;
        }
    }
    if (soma === i){
        console.log(i);
    }
}

/* resultado:
6
28
496
8128
*/



/* ------------------------- */ 
// 37
// Usando um laço while, imprima a soma dos quadrados dos primeiros
// 10 números naturais.

let somaQuadrados = 0;
let i = 1;
while (i <= 10){
    somaQuadrados += i * i;
    i++;
}
console.log(somaQuadrados);

/* resultado:
385
*/



/* ------------------------- */ 
// 38
// Usando um laço do-while, imprima a soma dos cubos dos primeiros
// 10 números naturais.

let somaCubos = 0;
let i = 1;
do {
    somaCubos += i * i * i;
    i++;
} while (i <= 10);
console.log(somaCubos);

/* resultado:
3025
*/



/* ------------------------- */ 
// 39

let numero = 5; // altere esse valor para o número desejado
let fatorial = 1;
for (let i = 1; i <= numero; i++){
    fatorial *= i;
}
console.log(`O fatorial de ${numero} é ${fatorial}`);

/* resultado:
O fatorial de 5 é 120
*/



/* ------------------------- */ 
// 40
// Usando um laço while, crie um programa que inverta uma string.

let original = "Hello";
let invertida = "";
let i = original.length - 1;
while (i >= 0){
    invertida += original[i];
    i--;
}
console.log(`A string "${original}" invertida é "${invertida}"`);

/* resultado:
A string "Hello" invertida é "olleH"
*/




