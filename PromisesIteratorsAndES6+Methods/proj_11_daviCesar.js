/* --------------------------------- */
// 144
//Implemente uma função que retorne uma Promise que resolve após um
// tempo específico em milissegundos.

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
delay(1000).then(() => console.log('Resolvido após 1 segundo!'))



/* resultado
Resolvido após 1 segundo!
*/



/* --------------------------------- */
// 145
//Crie uma função assíncrona que simule a busca de dados de um banco de
// dados e lance um erro se a entrada for uma string específica.

async function fetchData(input){
    if(input === "error"){
        throw new Error("Entrada inválida!");
    }
    return `dados para ${input}`;
}

fetchData("data")
    .then(data => console.log(data))
    .catch(err => console.error(err.message));

fetchData("error")
    .then(data => console.log(data))
    .catch(err => console.log(err.message));

/* resultado
dados para data
Entrada inválida!
*/



/* --------------------------------- */
// 146
//Use o Promise.all para aguardar várias Promises e retornar seus resultados
// em um array.

function promise1(){
    return new Promise(resolve => setTimeout(() => resolve("Resultado 1"), 1000))
}

function promise2(){
    return new Promise(resolve => setTimeout(() => resolve("Resultado 2"), 1500));
}

Promise.all([promise1(), promise2()])
    .then(results => console.log(results))
    .catch(err => console.error(err.message));



/* resultado

*/



/* --------------------------------- */
// 147
//Implemente uma função assíncrona que use try/catch para lidar com erros
// ao esperar uma Promise.

async function handleErrors(promise){
    try{
        const result = await promise;
        console.log(result);
    } catch (error){
        console.error(`Erro: ${error.message}`);
    }
}
const successfulPromise = Promise.resolve("Sucesso!");
const faillingPromise = Promise.reject(new Error("Falha!"));

handleErrors(successfulPromise);
handleErrors(faillingPromise);



/* resultado
Sucesso!
Falha!
*/



/* --------------------------------- */
// 148
// Implemente uma função async que simule a operação de busca de dados
// em uma API. Se o status da resposta for 200, a função deve retornar os dados, caso
// contrário, deve lançar um erro.

async function fetchDataFromAPI(url){
    let response = await fetch(url);
    if (response.status !== 200 ){
        throw new Error("Falaha na obtenção dos dados");
    }
    return await response.json();
}

fetchDataFromAPI("https://api.example.com/data")
    .then(data => console.log(data))
    .catch(err => console.error(err.message));



/* resultado

*/



/* --------------------------------- */
// 149
//Crie uma função que aguarde várias Promises e retorne a primeira que for
// resolvida.

function firstResolvedPromise(promises){
    return Promise.race(promises);
}
const p1 = new Promise(resolve => setTimeout(() => resolve("Primeira"), 500));
const p2 = new Promise(resolve => setTimeout(() => resolve("Segunda"), 1000));

firstResolvedPromise([p1, p2]).then(result => console.log(result));



/* resultado
Primeira
*/



/* --------------------------------- */
// 150
//Crie uma função async que simule a recuperação de dois recursos de API em
// sequência, onde o segundo requer dados do primeiro.

async function fetchSequentialData(firstURL, secondURLGenerator){
    let firtsData = await fetchDataFromAPI(firstURL);
    let secondURL = secondURLGenerator(firtsData);
    return await fetchDataFromAPI(secondURL);
}
fetchSequentialData("https://api.example.com/first", data => `https://api.example.com/second/${data.id}`)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));


/* resultado

*/



/* --------------------------------- */
// 151
//Utilize o async/await dentro de um método de classe para simular o carregamento de dados para essa classe.

class DataLoader {
    constructor(apiURL){
        this.apiURL = apiURL;
        this.data = null;
    }

    async loadData(){
        this.data = await fetchDataFromAPI(this.apiURL);
    }
}

const loader = new DataLoader("https://api.example.com/data");
loader.loadData()
    .then(() => console.log(loader.data))
    .catch(err => console.log(err.message));


/* resultado

*/



/* --------------------------------- */
// 152
// Crie uma função que retorna uma Promise que rejeita após um tempo específico em milissegundos.

function rejectAfterDelay(ms){
    return new Promise((_, reject) => setTimeout(() => reject(new error("Rejeitado após timeout!")), ms));
}
rejectAfterDelay(1000).catch(err => console.error(err.message));



/* resultado

*/



/* --------------------------------- */
// 153
// Utilize async/await em um loop para processar uma série de chamadas de API em sequência.

async function processInSequence(urls){
    let results = [];
    for (let url of urls){
        let data = await fetchDataFromAPI(url);
        results.push(data);
    }
    return results;
}
const urls = ["https://api.example.com/data1", "https://api.example.com/data2"];
processInSequence(urls);
    .then(data => console.log(data));
    .catch(err => console.log(err.message));


/* resultado

*/



/* --------------------------------- */
// 154
//Crie um iterador que gera uma sequência Fibonacci.

function* fibonacci() {
    let [prev, curr] = [0, 1];
    while(true){
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}
const fib = fibonacci()
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)


/* resultado
1
1
2
3
*/



/* --------------------------------- */
// 155
//Utilize um gerador para criar um iterável que gere uma sequência aritmética, dado um valor inicial, uma razão e o número de termos.

function* arithmeticSequence(start, reason, n){
    for(i = 0; i < n; i++){
        yield start;
        start += reason;
    }
}
const sequence = arithmeticSequence(1, 2, 5);
console.log([...sequence]);


/* resultado
Array(5) [ 1, 3, 5, 7, 9 ]
*/



/* --------------------------------- */
// 156
//Implemente um gerador que atue como uma paginação para um array, retornando os itens em lotes.

function* paginate(array, batchSize){
    for (let i = 0; i< array.length; i += batchSize){
        yield array.slice(i, i + batchSize);
    }
}

const items = [1,2,3,4,5,6,7,8,9,10];
const pages = paginate(items, 4)

console.log(pages.next().value)
console.log(pages.next().value)
console.log(pages.next().value)



/* resultado
Array(4) [ 1, 2, 3, 4 ]
Array(4) [ 5, 6, 7, 8 ]
Array [ 9, 10 ]
*/



/* --------------------------------- */
// 157
//Crie um gerador que retorne números primos.

function* primeGenerator(){
    function isPrime(num){
        for(let i = 2; i * i <= num; i++){
            if(num % i === 0) return false;
        }
        return num > 1;
    }

    let num = 2;
    while (true){
        if (isPrime(num)) yield num;
        num++;
    }
}

const primes = primeGenerator();

console.log(primes.next().value)
console.log(primes.next().value)
console.log(primes.next().value)
console.log(primes.next().value)

/* resultado
2
3
5
7
*/



/* --------------------------------- */
// 158
//Crie um iterador que retorne os números pares e ímpares alternadamente de um array, começando pelos pares.

function* alternateEvenOdd(array){
    let evens = array.filter(x => x % 2 === 0);
    let odds = array.filter(x => x % 2 !== 0);
    let index = 0;

    while (index < evens.length || index < odds.lenth){
        if (index < evens.lenght) yield evens[index];
        if (index < odds.length) yield odds[index];
        index++;
    }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const alternated = alternateEvenOdd(numbers);
console.log([...alternated]);


/* resultado
Array(4) [ 1, 3, 5, 7 ]
*/



/* --------------------------------- */
// 159
//Implemente um gerador que produza uma sequência geométrica.

function * geometricSequence(a, r, n){
    for( let i = 0; i < n; i++){
        yield a;
        a *= r;
    }
}
const sequence = geometricSequence(1, 2, 5);
console.log([...sequence]);

/* resultado
Array(5) [ 1, 2, 4, 8, 16 ]
*/



/* --------------------------------- */
// 160
// Crie um gerador que retorne uma sequência aritmética.

function* arithmeticSequence(a, d, n){
    for (let i = 0; i< n; i++){
        yield a;
        a += d;
    }
}
const sequence = arithmeticSequence( 1, 2, 5);
console.log([...sequence]);


/* resultado
Array(5) [ 1, 3, 5, 7, 9 ]
*/



/* --------------------------------- */
// 161
//Dado um array de números, utilize o método filter para retornar apenas os números ímpares.

function filterOdd(numbers){
    return numbers.filter(n => n% 2 !== 0);
}
console.log(filterOdd([1,2,3,4,5]));
console.log(filterOdd([10, 12, 15]));



/* resultado
Array(3) [ 1, 3, 5 ]
Array [ 15 ]
*/

/* --------------------------------- */
// 162
//Usando o método find, procure o primeiro número no array que seja maior que 10.

function findGreaterThanTen(numbers){
    return numbers.find(n => n > 10);
}
console.log(findGreaterThanTen([1, 2, 12, 8, 15]));



/* resultado
12
*/



/* --------------------------------- */
// 163
//Utilize o método findIndex para encontrar o índice da primeira ocorrência da string "JavaScript" em um array de strings.

function findJavaScriptIndex(strings){
    return strings.findIndex(s => s === "JavaScript");
}
console.log(findJavaScriptIndex(["Java", "Python", "JavaScript", "C++"]));




/* resultado
2
*/



/* --------------------------------- */
// 164
//Verifique usando o método every se todos os elementos de um array de números são positivos.

function areAllPositive(numbers){
    return numbers.every(n => n>0);
}
console.log(areAllPositive([1, 2, 3, 4, 5]))
console.log(areAllPositive([-1, 2, 3, 4, 5]))



/* resultado
true
false
*/



/* --------------------------------- */
// 165
//Dado um array de números, utilize o método map para dobrar todos os valores do array.

function doubleValues(numbers){
    return numbers.map(n => n*2);
}

console.log(doubleValues([1, 2, 3, 4]));



/* resultado
Array(4) [ 2, 4, 6, 8 ]
*/



/* --------------------------------- */
// 166
// Dado um array e um elemento, utilize o método includes para verificar se o elemento existe no array.

function doesInclude(array, element){
    return array.includes(element);
}

console.log(doesInclude(['a', 'b', 'c'], 'b'));
console.log(doesInclude(['a', 'b', 'c'], 'z'));



/* resultado
true
false
*/



/* --------------------------------- */
// 167
//Dado um array de números, verifique se pelo menos um dos números é menor que 10 utilizando o método some.

function hasSmallerThanTen(numbers){
    return numbers.some(n => n < 10);
}
console.log(hasSmallerThanTen([15, 20, 25]))
console.log(hasSmallerThanTen([5, 20, 25]))



/* resultado
false
true
*/



/* --------------------------------- */
// 168
//Converta uma string em um array de caracteres usando o método from.

function stringToArray(str){
    return Array.from(str);
}
console.log(stringToArray('hello'));


/* resultado
Array(5) [ "h", "e", "l", "l", "o" ]
*/



/* --------------------------------- */
// 169
// Concatene dois arrays usando o método concat.

function concatArrays(arr1, arr2){
    return arr1.concat(arr2);
}
console.log(concatArrays([1, 2], 3, 4));



/* resultado
Array(3) [ 1, 2, 3 ]
*/



/* --------------------------------- */
// 170
//Dado um array de objetos com propriedade name e age, utilize o método find para buscar o primeiro objeto que possui a idade maior que 20.

function findOlderThan20(people){
    return people.find(person => person.age > 20);
}
const samplePeople = [
    {name: 'Alice', age: 18},
    {name: 'Bob', age: 21},
    {name: 'Charlie', age: 19},
];
console.log(findOlderThan20(samplePeople));


/* resultado
Object { name: "Bob", age: 21 }
*/



/* --------------------------------- */
// 171
// Dado um array de números, verifique se todos os números são positivos utilizando o método every.

function areAllPositive(numbers){
    return numbers.every(n => n> 0);
}
console.log(areAllPositive([1, 2, 3]));
console.log(areAllPositive([-1, 2, 3]));



/* resultado
true
false
*/



/* --------------------------------- */
// 172
//Dado um array de números, retorne um novo array contendo apenas os números pares usando o método filter.

function filterEvens(numbers){
    return numbers.filter(n => n % 2 === 0);
}
console.log(filterEvens([1, 2, 3, 4]));


/* resultado
Array [ 2, 4 ]
*/



/* --------------------------------- */
// 173
//Dado um array de números, encontre o índice do primeiro número que é divisível por 5 usando o método findIndex.

function findDivisibleBy5(numbers){
    return numbers.findIndex(n => n % 5 === 0);
}
console.log(findDivisibleBy5([2, 4, 7 ,10, 11]))


/* resultado
3
*/