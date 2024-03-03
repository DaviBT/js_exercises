/* ------------------------------- */
// Tarefa 21
function determinarEstacao (mes){
    if (mes < 3 || mes === 12){
        console.log("Verão");
    } else if (mes <6){
        console.log("Outono");
    } else if(mes < 9){
        console.log("Inverno");
    } else {
        console.log("Primavera");
    }
}
determinarEstacao(12); // imprime: Verão
determinarEstacao(4); // imprime: Outono
determinarEstacao(7); // imprime: Inverno
determinarEstacao(10); // imprime: Primavera

/*Resultado:
Verão
Outono
Inverno
Primavera
*/




/* ------------------------------- */
// Tarefa 22
function determinarDiaNoMes(mes){
    switch(mes){
        case 2:
            console.log("28 ou 19 dias");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("30 dias");
            break;
        default:
            console.log("31 dias");
    }
}

determinarDiaNoMes(2) // imprime: 28 ou 29 dias
determinarDiaNoMes(4) // imprime: imprime 30 dias
determinarDiaNoMes(31) // imprime: 31 dias

/*Resultado:
28 ou 29 dias
30 dias
31 dias

*/



/* ------------------------------- */
// Tarefa 23
function verificaSemaforo(cor) {
    if(cor === "verde"){
        console.log("Siga em frente.");
    } else if(cor === "amarelo"){
        console.log("Atenção, diminua a velocidade.");
    } else if ("vermelho") {
        console.log("Pare seu veículo.");
    } else {
        console.log("Envie uma cor válida.");
    }
}

verificaSemaforo("verde"); // imprime: siga em frente
verificaSemaforo("amarelo"); // imprime: atenção, diminua a velocidade
verificaSemaforo("vermelho"); // imprime: pare seu veículo
verificaSemaforo("azul"); // imprime: envie uma cor válida

/*Resultado:
siga em frente
atenção, diminua a velocidade
pare seu veículo
envie uma cor válida
*/




/* ------------------------------- */
// Tarefa 24
for (let i = 1; i <= 10; i++){
    console.log(i);
}


/*Resultado:
1
2
3
4
5
6
7
8
9
10

*/





/* ------------------------------- */
// Tarefa 25
let i = 10;
while (i >= 1){
    console.log(i);
    i--;
}


/*Resultado:
10
9
8
7
6
5
4
3
2
1

*/




/* ------------------------------- */
// Tarefa 26
let i = 1;
do {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
} while (i <= 20);


/*Resultado:
1
3
5
7
9
11
13
15
17
19
*/



/* ------------------------------- */
// Tarefa 27
for (let i = 1; i <= 10; i++){
    console.log("5 X " + i + " = " + 5 * i);
}

/*Resultado:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/




/* ------------------------------- */
// Tarefa 28
let i = 1;
let soma = 0;
while (i <= 100){
    soma += 1;
    i++;
}
console.log(soma)


/*Resultado:
100
*/






/* ------------------------------- */
// Tarefa 29
let i = 1;
do{
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
} while (i <= 100);


/*Resultado:
2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42
44
46
48
50
52
54
56
58
60
62
64
66
68
70
72
74
76
78
80
82
84
86
88
90
92
94
96
98
100
*/



/* ------------------------------- */
// Tarefa 30
for (let num = 2; num <= 100; num++){
    let isPrime = true;
    for (let div = 2; div < num; div++){
        if (num % div == 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        console.log(num);
    }
}


/*Resultado:
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
*/