/* ------------------------------- */
// Tarefa 11

// function podeVotar(idade){
//     if (idade >= 18 && idade < 70) {
//         console.log("Voto obrigatório.");
//     } else if ((idade > 16 && idade <18) || idade >= 70) {
//         console.log("Voto facultativo.");
//     } else {
//         console.log("Não vota.");
//     }
// }

// podeVotar(15);
// podeVotar(16);
// podeVotar(18);
// podeVotar(70);

/* Resultado :
Não vota.
Voto obrigatório.
Voto facultativo.
*/



/* ------------------------------- */
// Tarefa 12

// function situacaoEstudante(mediaFinal){
//     if (mediaFinal >= 7) {
//         console.log("Aprovado.");
//     } else if (mediaFinal >= 5 && mediaFinal < 7) {
//         console.log("Em recuperação.");
//     } else {
//         console.log("Reprovado");
//     }
// }

// situacaoEstudante(7) // imprime: Aprovado
// situacaoEstudante(6)// imprime: em recuperação
// situacaoEstudante(4)// imprime: reprovado

/* Resultado :
Aprovado.
Em recuperação.
Reprovado
*/



/* ------------------------------- */
// Tarefa 13
// function calcularIMC(peso, altura){
//     var imc = peso / (altura * altura);
//     if(imc < 18.5) {
//         console.log("Abaixo do peso");
//     } else if (imc >= 18.5 && imc < 25){
//         console.log("Peso normal");
//     } else if( imc >= 25 && imc < 30) {
//         console.log("Sobrepeso");
//     } else {
//         console.log("Obesidade");
//     }
// }

// calcularIMC(60, 1.7); // imprime: peso normal
// calcularIMC(80, 1.7); // imprime: sobrepeso
// calcularIMC(90, 1.7); // imprime: obesidade


/* Resultado :
Peso normal
sobrepeso
obesidade
*/



/* ------------------------------- */
// Tarefa 14
// function verificarBissexto(ano){
//     if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
//         console.log(ano + " é um ano bissexto");
//     } else {
//         console.log(ano + " não é um ano bissexto");
//     }
// }

// verificarBissexto(2000) // imprime: 2000 é um ano bissexto
// verificarBissexto(2001) // imprime: 2001 não é um ano bissexto
// verificarBissexto(2000) // imprime: 2100 não é um ano bissexto


/* Resultado :
2000 é um ano bissexto
2001 não é um ano bissexto
2100 não é um ano bissexto
*/



/* ------------------------------- */
// Tarefa 15
// function verificarPalidromo(palavra){
//     var palavraInvertida = palavra.split("").reverse().join("");
//     if (palavra == palavraInvertida){
//         console.log(palavra + " é um palíndromo");
//     } else {
//         console.log(palavra + " não é um palíndromo");
//     }
// }
// verificarPalidromo("arara") // imprime: arara é um palíndromo
// verificarPalidromo("gato")// imprime: gato não é um palíndromo

/* Resultado :
arara é um palíndromo
gato não é um palíndromo
*/



/* ------------------------------- */
// Tarefa 16

// function maiorNumero(n1, n2, n3) {
//     if (n1, n2 && n1 > n3){
//         console.log(n1 + " é o maior número");
//     } else if(n2 > n1 && n2 > n3){
//         console.log(n2 + " é o maior número");
//     } else {
//         console.log(n3 + " é o maior número")
//     }
// }

// maiorNumero(1, 2, 3) //imprime: 3 é o maior número
// maiorNumero(5, 3, 4) //imprime: 5 é o maior número
// maiorNumero(7, 8, 7) //imprime: 8 é o maior número

/* Resultado :
3 é o maior número
5 é o maior número
8 é o maior número
*/




/* ------------------------------- */
// Tarefa 17

// function parOuImpar(numero){
//     if(numero % 2 == 0){
//         console.log(numero + " é par");
//     } else {
//         console.log(numero + " é ímpar");
//     }
// }

// parOuImpar(2); // imprime: 2 é par 
// parOuImpar(3); // imprime: 3 é par

/* Resultado :
 2 é par 
 3 é par
*/




/* ------------------------------- */
// Tarefa 18
// function podeDirigir(idade){
//     if(idade >= 18){
//         console.log("Pode dirigir.")
//     } else {
//         console.log("Não pode dirigir");
//     }
// }
// podeDirigir(15); //imprime: não pode dirigir
// podeDirigir(18); //imprime: pode dirigir
// podeDirigir(36); //imprime: pode dirigir


/* Resultado :
não pode dirigir
pode dirigir
pode dirigir
*/




/* ------------------------------- */
// Tarefa 19
// function dentroDoIntervalo(numero, limiteInferior, limiteSuperior){
//     if(numero >= limiteInferior && numero <= limiteSuperior) {
//         console.log(numero + " está dentro do intervalo");
//     } else {
//         console.log(numero + " está fora do intervalo");
//     }
// }

// dentroDoIntervalo(5, 1, 10) // imprime: 5 está dentro do intervalo
// dentroDoIntervalo(15, 1, 10) // imprime: 15 está fora do intervalo

/* Resultado :
5 está dentro do intervalo
15 está fora do intervalo
*/




/* ------------------------------- */
// Tarefa 20
function classificarAluno(nota){
    if(nota >= 90){
        console.log("A");
    } else if (nota >= 80){
        console.log("B");
    } else if (nota >= 70){
        console.log("C")
    } else if (nota >= 60){
        console.log("D")
    } else{
        console.log("F")
    }
}

classificarAluno(95) // imprime: A
classificarAluno(82) // imprime: B
classificarAluno(74) // imprime: C
classificarAluno(62) // imprime: D
classificarAluno(55) // imprime: F



/* Resultado :
A
B
C
D
F
*/