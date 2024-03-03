/* ------------------------------------------------ */
// 97
// Convertendo Objetos em Strings JSON

function objetoParaJson(obj){
    return JSON.stringify(obj);
}
const objetoTeste = { nome : "João", idade: 25};
console.log(objetoParaJson(objetoTeste));

/* resultado:
{"nome":"João","idade":25}
*/



/* ------------------------------------------------ */
// 98
// Convertendo strings em objetos

function jsonParaObjeto(jsonStr){
    return JSON.parse(jsonStr);
}
const jsonStringTeste = '{"nome":"João","idade":25}'
console.log(jsonParaObjeto(jsonStringTeste));

/* resultado:
Object { nome: "João", idade: 25 }
*/



/* ------------------------------------------------ */
// 99
// Acessando Propriedades de um Objeto Convertido

function acessarPropriedade(jsonStr, prop){
    const obj = JSON.parse(jsonStr)
    return obj[prop]
}

const jsonStringTeste = '{"nome":"João", "idade":25}'
console.log(acessarPropriedade(jsonStringTeste,"nome"))

/* resultado:
João
*/



/* ------------------------------------------------ */
// 100
// Adicionando Propriedades a um Objeto Convertido

function adicionarPropriedade(jsonStr, chave, valor){
    const obj = JSON.parse(jsonStr);
    obj[chave] = valor;
    return obj;
}
const jsonStringTeste = '{"nome":"João", "idade":25}';
console.log(adicionarPropriedade(jsonStringTeste, "profissao", "Engenheiro"))

/* resultado:
Object { nome: "João", idade: 25, profissao: "Engenheiro" }
*/



/* ------------------------------------------------ */
// 101
// Filtrando Propriedades ao Converter para JSON

function filtrarEConverter(obj){
    return JSON.stringify(obj, ["nome", "idade"])
}
const objetoTeste = {nome: "João", senha: "12345", idade: 25};
console.log(filtrarEConverter(objetoTeste));

/* resultado:
{"nome":"João","idade":25}
*/



/* ------------------------------------------------ */
// 102
// Formatando a Saída JSON

function formatarJson(obj){
    return JSON.stringify(obj, null, 2)
}
const objetoTeste = {nome: "João", idade:25}
console.log(formatarJson(objetoTeste))

/* resultado:
{
  "nome": "João",
  "idade": 25
}
*/



/* ------------------------------------------------ */
// 103
// Trabalhando com Arrays em JSON

function adicionarAoArray(jsonStr, novoObjeto){
    const arr = JSON.parse(jsonStr);
    arr.push(novoObjeto);
    return arr;
}
const jsonStringTeste =
    '[{"nome","idade":25},{"nome":"Maria","idade":30}]';

console.log(adicionarAoArray(jsonStringTeste,{nome:"Pedro", idade:22}));

/* resultado:
{
  "nome": "João",
  "idade": 25
}
*/



/* ------------------------------------------------ */
// 104
// Manipulando Valores ao Converter para JSON

function alterarEConverter(obj){
    const alterarValor = (key, value) => {
        if (key === "idade") return value + 1;
        return value;
    };
    return JSON.stringify(obj, alterarValor);
}
const objetoTeste = {nome: "João", idade:25};
console.log(alterarEConverter(objetoTeste));

/* resultado:
{"nome":"João","idade":26}
*/


/* TEMPLATE LIBERALS */
/* ------------------------------------------------ */
// 104
// Crie uma função que aceite nome, sobrenome e idade e retorne
// uma apresentação usando template literals.

function apresentacao(nome, sobrenome, idade){
    return `Olá, meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`
}
console.log(apresentacao("João", "Silva", 30));

/* resultado:
Olá, meu nome é João Silva e tenho 30 anos.
*/



/* ------------------------------------------------ */
// 105
// Escreva uma função que aceite dois valores e retorne um texto
// que faça uma comparação entre eles usando template literals.

function comparaValores(valorA, valorB){
    let comparacao = valorA === valorB ? "igual" : (valorA > valorB ? "maior" : "menor");
    return `O valor ${valorA} é ${comparacao} ao valor ${valorB}`;
}
console.log(comparaValores(5,3));
console.log(comparaValores(2,2));


/* resultado:
O valor 5 é maior ao valor 3 
O valor 2 é igual ao valor 2
*/



/* ------------------------------------------------ */
// 106
// Crie uma função que aceite uma lista de itens e retorne uma
// string enumerada usando template literals.

function listaEnumerada(itens){
    return itens.map((item, index) => `${index + 1}. ${item}`).join(', ');
}
console.log(listaEnumerada(['maçã', 'banana', 'uva']));

/* resultado:
1. maçã, 2. banana, 3. uva
*/



/* ------------------------------------------------ */
// 107
// Crie uma função que aceite um objeto com informações de um
// livro (título, autor e ano) e retorne uma descrição do livro usando template
// literals.

function descricaoLivro(livro){
    return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.ano}.`
}
console.log(descricaoLivro({ titulo: 'O Principe', autor: 'Maquiavel', ano: 1532}));

/* resultado:
O livro 'O Principe' foi escrito por Maquiavel em 1532.
*/



/* ------------------------------------------------ */
// 108
// Converta a seguinte função em uma arrow function e retorne o resultado.
/*
function helloWorld(name){
    return "Hello, " + name + "!";
}*/


const helloWorld = name => `Hello, ${name}!`;
console.log(helloWorld("Alice"));
cpnsole.log(helloWorld("Bob"));

/* resultado:
Hello, Alice!
*/



/* ------------------------------------------------ */
// 109
// 

const multiply = (a,b) => a*b;

console.log(multiply(5,4));
console.log(multiply(3,7));

/* resultado:
20
21
*/



/* ------------------------------------------------ */
// 110
// Escreva uma arrow function que não receba argumentos e retorne a data
// atual.

const today = () => new Date().toDateString();

console.log(today());

/* resultado:
Fri Mar 01 2024
*/



/* ------------------------------------------------ */
// 111
// Crie uma arrow function que tome um array de números como argumento
// e retorne a soma de todos eles.

const sumArray = numbers => numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sumArray([1,2,3,4]));
console.log(sumArray([5,5,5]));

/* resultado:

*/



/* ------------------------------------------------ */
// 112
// Escreva uma arrow function que retorne uma mensagem personalizada,
// dadas as propriedades "nome" e "idade" de um objeto.

const personalizedMessage = ({name, age}) => `Hello, my name is ${name} and I am ${age} years old.`
console.log(personalizedMessage({name:"Alice", age:30}));
console.log(personalixedMessage({name:"Bob",age:25}))

/* resultado:
Hello, my name is Alice and I am 30 years old.
*/



/* ------------------------------------------------ */
// 113
// Escreva uma arrow function que aceite um número como argumento e
// retorne uma função que incrementa esse número.

const incrementer = base => () => ++base;

const incrementBy5 = incrementer(5);
console.log(incrementBy5());
console.log(incrementBy5());

/* resultado:
6
7
*/



/* ------------------------------------------------ */
// 114
// 

const concatFirstString = firstString => secondString => firstString + secondString;

const helloString = concatFirstString("Hello ")
console.log(helloString("World!"));
console.log(helloString("Alice!"));

/* resultado:
Hello World!
Hello Alice!
*/