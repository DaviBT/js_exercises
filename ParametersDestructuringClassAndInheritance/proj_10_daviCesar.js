/* ------------------------------ */
//115
//Crie uma função que receba até três parâmetros, sendo os dois primeiros
// obrigatórios e o terceiro opcional. Se o terceiro parâmetro não for fornecido, atribua o
// valor "Desconhecido" a ele utilizando parâmetros default.

function informacoes(nome, idade, cidade = "Desconhecido"){
    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`;
}

console.log(informacoes("Carlos", 25));
console.log(informacoes("Ana", 30, "São Paulo"))



/* resultado
Nome: Carlos, Idade: 25, Cidade: Desconhecido
Nome: Ana, Idade: 30, Cidade: São Paulo
*/




/* ------------------------------ */
//116
//Desenvolva uma função que utilize o parâmetro rest para receber um
// número indefinido de argumentos e retorne a soma de todos eles.

function soma(...nums){
    return nums.reduce((acc, curr) => acc + curr, 0)
}
console.log(soma(1, 2, 3, 4));
console.log(soma(5, 5, 10));



/* resultado
10
20
*/




/* ------------------------------ */
//117
//Implemente uma função que aceite um objeto e use o operador spread para
// criar uma cópia profunda desse objeto.

function copiaProfunda(obj){
    return {...obj};
}
const original = { nome: "Lucas", idade: 20 };
const copia = copiaProfunda(original);
console.log(copia);
original.nome = "Rafael";
console.log(copia.nome);



/* resultado
Object { nome: "Lucas", idade: 20 }
Lucas
*/




/* ------------------------------ */
//118
// Escreva uma função que combine dois arrays em um novo array. Use o
// operador spread para realizar essa tarefa.

function combinarArrays(arr1, arr2){
    return [...arr1, ...arr2];
}
console.log(combinarArrays([1, 2, 3], [4, 5 , 6]));


/* resultado
Array(6) [ 1, 2, 3, 4, 5, 6 ]
*/




/* ------------------------------ */
//119
//

function filtrarNumeros(...args){
    return args.filter(arg => typeof arg === "number");
}
console.log(filtrarNumeros(1, "a", 3, "b", 5))



/* resultado
Array(3) [ 1, 3, 5 ]
*/




/* ------------------------------ */
//120
//Implemente uma função que aceite dois objetos. Use o operador spread
// para mesclar os dois objetos em um novo objeto.

function mesclarObjetos(obj1, obj2){
    return {...obj1, ...obj2};
}
const objeto1 = {nome: "Lucas"};
const objeto2 = { idade: 30 };
console.log(mesclarObjetos(objeto1, objeto2))



/* resultado
Object { nome: "Lucas", idade: 30 }
*/




/* ------------------------------ */
//121
//Crie uma função que utilize parâmetros default para criar um objeto "carro"
// com propriedades marca, modelo e ano, onde apenas modelo é obrigatório.

function criarCarro(modelo, marca = "Desconhecido", ano = new Date().getFullYear()){
    return { marca, modelo, ano }
}
console.log(criarCarro("Civic"));
console.log(criarCarro("Civic", "Honda", 2020));


/* resultado
Object { nome: "Lucas", idade: 30 }
Object { nome: "Lucas", idade: 30 }
*/




/* ------------------------------ */
//122
//Implemente uma função que receba dois arrays e retorne um novo array
// contendo os elementos do primeiro array seguido dos elementos do segundo array. A
// função deve usar o parâmetro rest e o operador spread.

function unirArrays(...arrays){
    return [].concat(...arrays);
}
console.log(unirArrays([1, 2], [3, 4], [5, 6]));



/* resultado
Array(6) [ 1, 2, 3, 4, 5, 6 ]
*/




/* ------------------------------ */
//123
//Crie uma função que use o operador spread para transformar uma string
// em um array de caracteres.

function stringParaArray(str){
    return [...str];
}
console.log(stringParaArray("Hello"))



/* resultado
Array(5) [ "H", "e", "l", "l", "o" ]
*/




/* ------------------------------ */
//124
//Implemente uma função que aceite dois arrays. O primeiro array é uma lista
// de objetos com uma chave e valor, e o segundo é uma lista de chaves. A função deve
// retornar um novo array de objetos contendo apenas as chaves especificadas no
// segundo array.

function filtrarPorChaves(arrayObjetos, chaves){
    return arrayObjetos.map(obj => {
        let novoObj = {};
        chaves.forEach(chave => {
            if(obj[chave] !== undefined) novoObj[chave] = obj[chave];
        });
        return novoObj;
    });
}

const data = [{ nome: "Lucas", idade: 30, cidade:"São Paulo" }, {nome: "Ana", idade: 25 }];

console.log(filtrarPorChaves(data, ["nome", "cidade"]));

/* resultado
Array [ {…}, {…} ]
*/




/* ------------------------------ */
//125
// Extração Simples de Propriedades de um Objeto
// Dado um objeto com várias propriedades, extraia apenas o nome e a idade
// desse objeto e retorne-os em uma string formatada.

function extrairDadosPessoa(pessoa){
    const { nome, idade } = pessoa;
    return `Nome: ${nome}, Idade: ${idade}`;
}
const pessoa = { nome: "Lucas", idade: 30, cidade: "São Paulo"};
console.log(extrairDadosPessoa(pessoa));



/* resultado
Nome: Lucas, Idade: 30
*/




/* ------------------------------ */
//126
//Desestruturação de Arrays com Valores Padrão
// Dado um array de números, extraia os três primeiros valores. Caso algum
// valor não esteja presente, ele deve ser substituído por null.

function extrairValores(array) {
    const [primeiro = null, segundo = null, terceiro = null] = array;
    return [primeiro, segundo, terceiro];
}
console.log(extrairValores([1, 2]))
console.log(extrairValores([1, 2, 3, 4]))


/* resultado
Array(3) [ 1, 2, null ]
Array(3) [ 1, 2, 3 ]
*/




/* ------------------------------ */
//127
//Desestruturação de Objetos Aninhados
// Dado um objeto que tem uma propriedade chamada endereco, que por sua
// vez é outro objeto contendo a propriedade cidade, extraia apenas a cidade desse objeto
// aninhado.

function extrairCidade(usuario){
    const { endereco: { cidade } } = usuario;
    return cidade;
}
const usuario = { nome: "Lucas", endereco: { rua: "Rua A", cidade: "São Paulo", estado: "SP" } };

console.log (extrairCidade(usuario));


/* resultado
São Paulo
*/




/* ------------------------------ */
//128
// Desestruturação em Parâmetros de Função
// Dado um objeto com propriedades nome e idade, escreva uma função que
// desestruture essas propriedades diretamente em seus parâmetros e retorne uma string
// formatada.

function exibirInformacoes({ nome, idade }){
    return `Nome: ${nome}, Idade: ${idade}`;
}
const pessoa2 = { nome: "Ana", idade: 25 };
console.log(exibirInformacoes(pessoa2));


/* resultado
Nome: Ana, Idade: 25
*/




/* ------------------------------ */
//129
// Combinando Desestruturação com Rest
// Escreva uma função que aceite vários números como argumentos. Extraia os
// três primeiros números e coloque os restantes em um array separado.

function separarNumeros(primeiro, segundo, terceiro, ...resto){
    return [primeiro, segundo, terceiro, resto];
}
console.log(separarNumeros(1, 2, 3, 4 , 5, 6));


/* resultado
Array(4) [ 1, 2, 3, (3) […] ]
*/




/* ------------------------------ */
//130
//Troca de Valores Usando Desestruturação
// Sem usar uma variável temporária, troque os valores de duas variáveis.

let a = 5;
let b = 10;
[a, b] = [b, a];

console.log(a);
console.log(b)


/* resultado
10
5
*/




/* ------------------------------ */
//131
//Desestruturação de Arrays Aninhados
// Dado um array de arrays, extraia o segundo valor do primeiro array interno e
// o primeiro valor do segundo array interno.

function extrairValoresAninhados(array) {
    const [[, valor1], [valor2]] = array;
    return [valor1, valor2];
}
console.log(extrairValoresAninhados([[1, 2, 3], [4, 5]]));


/* resultado
Array [ 2, 4 ]
*/




/* ------------------------------ */
//132
//Desestruturação com Renomeação de Variáveis
// Dado um objeto com propriedades a e b, desestruture essas propriedades
// renomeando-as para alpha e beta, respectivamente.

function renomearVariaveis(obj){
    const { a: alpha, b: beta } = obj;
    return { alpha, beta }
}
const objeto = { a: "valorA", b: "valorB"};
console.log(renomearVariaveis(objeto));


/* resultado
Object { alpha: "valorA", beta: "valorB" }
*/




/* ------------------------------ */
//133
//Classe Tempo
// Crie uma classe Tempo
// com propriedades para horas,
// minutos e segundos. Adicione
// métodos para somar e subtrair outro
// objeto Tempo.

class Tempo {
    constructor(horas = 0, minutos = 0, segundos = 0){
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    somar(tempo){
        let totalSegundos = this.segundos + tempo.segundos;
        let totalMinutos = this.minutos + tempo.minutos;
        let totalHoras = this.horas + tempo.horas;

        if (totalSegundos >= 60){
            totalMinutos += Math.floor(totalSegundos/60);
            totalSegundos %= 60;
        }

        if(totalMinutos >= 60){
            totalHoras += Math.floor(totalMinutos/60);
            totalMinutos %= 60;
        }

        return new Tempo(totalHoras, totalMinutos, totalSegundos);
    }
    subtrair(tempo){
        let totalSegundos = this.segundos - tempo.segundos;
        totalMinutos = this.minutos - tempo.minutos;
        let totalHoras = this.horas - tempo.horas;

        if(totalSegundos<0){
            totalMinutos -= Math.ceil(Math.abs(totalSegundos) / 60);
            totalSegundos = 60 - (Math.abs(totalSegundos) % 60);
        }
        if(totalMinutos < 0){
            totalHoras -= Math.ceil(Math.abs(totalMinutos) / 60);
            totalMinutos = 60 - (Math.abs(totalMinutos) % 60);
        }

        return new Tempo(totalHoras, totalMinutos, totalSegundos);
    }
}
const tempo1 = new Tempo(1, 20, 30);

const tempo2 = new Tempo(0, 50, 40);

let resultado = tempo1.somar(tempo2);

console.log(`${resultado.horas}h:${resultado.minutos}m:${resultado.segundos}s`);

resultado = tempo1.subtrair(tempo2);
console.log(`${resultado.horas}h:${resultado.minutos}m:${resultado.segundos}s`);


/* resultado
2h:11m:10s
*/




/* ------------------------------ */
//134
//Interface usando Classes
// Simulando interfaces, crie
// duas classes, Voador e Nadador,
// cada uma com um método, voar e
// nadar, respectivamente. Em seguida,
// crie uma classe Pato que
// "implemente" ambas as "interfaces",
// fazendo a classe Pato ter os métodos
// das duas classes anteriores.


class Voador {
    voar() {
    return "Estou voando!";
    }
}

class Nadador {
    nadar(){
        return "Estou nadando!";
    }
}

class Pato extends Voador{
    constructor(){
        super();
        const nadador = new Nadador();
        this.nadar = nadador.nadar.bind(this);
    }
}

const pato = new Pato();
console.log(pato.voar());
console.log(pato.nadar());


/* resultado
Estou voando!
Estou nadando!
*/




/* ------------------------------ */
//135
//Herança e Polimorfismo
// A classe Animal define
// um método falar. As classes Cão e
// Gato estendem Animal e
// sobrescrevem o método falar para
// proporcionar sua própria
// implementação. Isso é um exemplo
// de polimorfismo.

class Animal {
    falar(){
        return "O animal faz um som";
    }
}

class Cao extends Animal {
    falar(){
        return "O cão late";
    }
}

class Gato extends Animal {
    falar(){
        return "O gato mia"
    }
}

const cao = new Cao();
console.log(cao.falar());

const gato = new Gato();
console.log(gato.falar());


/* resultado
O cão late
O gato mia
*/




/* ------------------------------ */
//136
//Classe Abstrata
// Crie uma classe abstrata
// chamada Forma com um método
// abstrato area. Crie duas subclasses:
// Círculo e Retângulo, que
// implementam o método area.

class Forma {
    area(){
        throw new Error("Método 'area deve ser implementado por subclasses!");
    }
}

class Circulo extends Forma{
    constructor(raio){
        super();
        this.raio = raio;
    }

    area(){
        return Math.PI * this.raio * this.raio;
    }
}

class Retangulo extends Forma{
    constructor(largura, altura){
        super();
        this.largura = largura;
        this.altura = altura;
    }

    area(){
        return this.largura * this.altura;
    }
}

const circulo = new Circulo(5);
console.log(circulo.area());

const retangulo = new Retangulo(4, 5);
console.log(retangulo.area())



/* resultado
78.53981633974483
20
*/




/* ------------------------------ */
//137
//Encapsulamento
// Crie uma classe Pessoa
// que encapsule a idade da pessoa,
// garantindo que a idade não possa
// ser negativa.

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this._idade = idade;
    }

    get idade(){
        return this._idade;
    }

    set idade(valor){
        if(valor < 0){
            console.log("Idade não pode ser negativa!");
            return;
        }
        this._idade = valor;
    }
}
const pessoa = new Pessoa("João", 30);
console.log(pessoa.idade);

pessoa.idade = -5;
console.log(pessoa.idade);

/* resultado
30
Idade não pode ser negativa!
30
*/




/* ------------------------------ */
//138
//Extensão de Métodos
// Crie uma classe Vendedor
// que estenda uma classe Pessoa. O
// Vendedor deve ter um método
// vender e uma propriedade
// totalVendas, que é incrementada a
// cada venda.

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        return `${this.nome} está falando.`;
    }
}

class Vendedor extends Pessoa {
    constructor(nome){
        super(nome);
        this.totalVendas = 0;
    }

    vender(){
        this.totalVendas++;
        return `${this.nome} fez uma venda`;
    }
}
const vendedor = new Vendedor("Carlos");
console.log(vendedor.vender());
console.log(vendedor.totalVendas)


/* resultado
Carlos fez uma venda
1
*/




/* ------------------------------ */
//139
//Classe Estática
// Crie uma classe Calculadora que tenha um método estático somar,
// que aceite dois números e retorne sua soma.

class Calculadora{
    static somar(a,b){
        return a+b;
    }
}
console.log(Calculadora.somar(5,3))


/* resultado
8
*/




/* ------------------------------ */
//140
//Método de Fábrica
// Crie uma classe Carro que
// possui um método de fábrica
// criarSedan que retorna uma nova
// instância de um carro com a
// propriedade tipo definida como
// 'Sedan’.

class Carro {
    constructor(tipo){
        this.tipo = tipo;
    }

    static criarSedan(){
        return new Carro('Sedan');
    }
}

const sedan = Carro.criarSedan();
console.log(sedan.tipo)



/* resultado
Sedan
*/




/* ------------------------------ */
//141
//Classes e Exceções
// Crie uma classe Conta
// com um método sacar. Se o valor do
// saque for maior que o saldo
// disponível, lance uma exceção.

class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }

    sacar(valor){
        if (valor > this.saldo){
            throw new Error('Saldo insuficiente');
        }
        this.saldo -= valor;
        return this.saldo;
    }
}
const conta = new Conta(100);
console.log(conta.sacar(50));

try{
    conta.sacar(100);
} catch (e){
    console.log(e.message);
}


/* resultado
50
Saldo insuficiente
*/




/* ------------------------------ */
//142
//Classes com Métodos Privados
// Crie uma classe Segredo que tenha um método privado chamado
// #mensagemSecreta e um método público para acessar essa mensagem.

class Segredo {
    #mensagemSecreta = "Esta é uma mensagem secreta!";

    revelarSegredo(){
        return this.#mensagemSecreta;
    }
}

const segredo = new Segredo();
console.log(segredo.revelarSegredo());


/* resultado
Esta é uma mensagem secreta!
*/




/* ------------------------------ */
//143
//Herança e Construtores
//Crie uma classe Veículo com um construtor que aceite marca e modelo. Em
// seguida, crie uma classe Carro que herde de Veículo e adicione um construtor que aceite
// marca, modelo e numPortas.

class Veiculo {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, numPortas){
        super(marca, modelo);
        this.numPortas = numPortas;
    }
}

const carro = new Carro("Toyota", "Corolla", 4);
console.log(carro);


/* resultado
Object { marca: "Toyota", modelo: "Corolla", numPortas: 4 }
*/




