/* ---------------------------------------------*/
// 51
// Escreva uma função que calcule o fatorial de um número.

function calcularFatorial(num){
    let fatorial = 1;
    for(let i = 2; i <=num; i++){
        fatorial *= i;
    }
    return fatorial;
}
console.log(calcularFatorial(5));

/* resultado:
120
*/



/* ---------------------------------------------*/
// 52
// Escreva uma função que verifique se um número é primo.

function calcularFibonacci(n){
    let a = 0;
    let b = 1;

    for(let i = 2; i <= n; i++){
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b
}
console.log(calcularFibonacci(7));

/* resultado:
13
*/



/* ---------------------------------------------*/
// 53
// Escreva uma função que verifique se um número é primo.

function verificarPrimo(num){
    for(let i = 2; i< num; i++){
        if(num%i === 0){
            return false;
        }
    }
    return  num > 1
}
console.log(verificarPrimo(7));

/* resultado:
true
*/



/* ---------------------------------------------*/
// 54
// Escreva uma função que ordene um array de números em ordem
// decrescente.

function ordenarDecrescente(array){
    return array.sort((a,b) => b - a);
}
console.log(ordenarDecrescente([5,2,1,3,4]))

/* resultado:
(5) [5, 4, 3, 2, 1]
*/



/* ---------------------------------------------*/
// 55
// Escreva uma função que retorne o menor número em um array de
// números.

function menorNumero(array){
    return Math.min(...array);
}
console.log(menorNumero([5,2,1,3,4]))

/* resultado:
1
*/



/* ---------------------------------------------*/
// 56
// Escreva uma função que retorne o maior número em um array
// de números.

function maiorNumero(array){
    return Math.max(...array);
}
console.log(maiorNumero([5,2,1,3,4]));

/* resultado:
5
*/



/* ---------------------------------------------*/
// 57
// Escreva uma função que retorne a soma de todos os números
// ímpares em um array de números.

function somaImpares(array){
    return array.reduce((soma, num) => num%2 !== 0 ? soma + num : soma, 0);
}
console.log(somaImpares([5,2,1,3,4]));

/* resultado:
9
*/



/* ---------------------------------------------*/
// 58
// função que retorna a soma de todos os números pares em uma array de números

function somaPares(array){
    return array.reduce((soma,num) => num%2 === 0 ? soma + num : soma, 0);
}
console.log(somaPares([5,2,1,3,4]));

/* resultado:
6
*/



/* ---------------------------------------------*/
// 59
// função que recebe um array de números e retorna um novo array com todos os números duplicados

function duplicarNumeros(array){
    return array.map(num => num* 2);
}
console.log(duplicarNumeros([5,2,1,3,4]));

/* resultado:
[10, 4, 2, 6, 8]
*/



/* ---------------------------------------------*/
// 60
// função que recebe um array de números e retorne um novo array com todos os números ao quadrado

function quadradoNumeros(array){
    return array.map(num => num*num);
}
console.log(quadradoNumeros([5,2,1,3,4]));


/* resultado:
[25, 4, 1, 9, 16]
*/



/* ------------------------- */
// 61
//Escreva uma função que receba um array de números e retorne um
// novo array com a raiz quadrada de todos os números.
//

function raizQuadradaNumeros(array){
    return array.map(num => Math.sqrt(num));
}
console.log(raizQuadradaNumeros([25,4,1,9,16]));

/*resultado:
[5, 2, 1, 3, 4]
*/




/* ------------------------- */
// 62
//Escreva uma função que receba um número e retorne uma string
// repetida aquele número de vezes.
//

function repetirString(num){
    return 'Olá '.repeat(num);
}
console.log(repetirString(3))

/*resultado:
Olá Olá Olá 
*/




/* ------------------------- */
// 63
//Escreva uma função que receba um número e retorne um array com
// todos os números primos até aquele número.
//

function primosAteN(num){
    let primos = [];
    for(let i = 2; i <= num; i++){
        if(isPrimo(i)){
            primos.push(i);
        }
    }
    return primos;
}

function isPrimo(num){
    for(let i = 2; i<num; i++){
        if(num%i === 0){
            return false;
        }
    }
    return num > 1;
}
console.log(primosAteN(10));

/*resultado:
[2, 3, 5, 7]
*/




/* ------------------------- */
// 64
//Escreva uma função que receba uma string e retorne o número de
// palavras na string.
//

function contarPalavras(str){
    return str.split(' ').length;
}
console.log(contarPalavras("Olá, Mundo!"));

/*resultado:
2
*/




/* ------------------------- */
// 65
//Escreva uma função que aceite um array de números e uma função
// de callback e retorne a soma de todos os números do array após a aplicação da
// função de call-back
//

function somaComCallback(array,callback){
    return array.map(callback).reduce((a,b) => a + b, 0);
}

let numeros = [1,2,3,4,5];
let callback = num => num * 2;
console.log(somaComCallback(numeros, callback))

/*resultado:
30
*/




/* ------------------------- */
// 66
//Escreva uma função que aceite uma função de callback que retorne
// verdadeiro ou falso e um array, e retorne um novo array que contém apenas os
// elementos para os quais a função de callback retornou verdadeiro
//

function filtrarPorCallback(array,callback){
    return array.filter(callback);
}
let numeros = [1,2,3,4,5]
let callback = num => num %2 === 0;

console.log(filtrarPorCallback(numeros,callback))

/*resultado:
[2, 4]
*/




/* ------------------------- */
// 67
//Escreva uma função que aceite uma função de callback e um array
// de arrays, e retorne um novo array que contém os resultados de aplicar a
// função de callback a cada array.
//

function mapearArrays(array,callback){
    return array.map(callback);
}
let arrays = [[1,2,3], [4,5,6], [7,8,9]];
let callback = arr => arr.reduce((a,b) => a+b,0)

console.log(mapearArrays(arrays,callback))

/*resultado:
[6, 15, 24]
*/




/* ------------------------- */
// 68
// Escreva uma função de alta ordem que aceite um array de números
// e uma função de callback, e retorne um novo array que contém apenas os
// números do array original que satisfazem a condição da função de callback.
//

function filtrarNumeros(array,callback){
    return array.filter(callback);
}

let numeros = [1,2,3,4,5];
let callback = num => num > 3;

console.log(filtrarNumeros(numeros,callback))

/*resultado:
[4, 5]
*/




/* ------------------------- */
// 69
//Escreva uma função que aceite um número e uma função de callback, e execute a função de callback o número de vezes especificado.
//

function executarCallback(n,callback){
    for(let i = 0; i<n;i++){
        callback(i)
    }
}
let callback = i => console.log(`Execução ${i+1}`)
executarCallback(5, callback)

/*resultado:
Execução 1
Execução 2
Execução 3
Execução 4
Execução 5
*/




/* ------------------------- */
// 70
//Escreva uma função que aceite uma função de callback e um
// número, e execute a função de callback após um certo número de
// milissegundos especificados pelo número.
//

function executarDepois(callback, tempo){
    setTimeout(callback, tempo)
}
let callback = () => console.log("Executado!")
executarDepois(callback,2000)

/*resultado:
Executado!
*/
