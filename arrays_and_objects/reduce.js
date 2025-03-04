/*
reduce é utilizado para reduzir um array a um unico valor

parametros:
-array original (values)
-acumulador (accumulator)
-valor da iteracap (currentValue)
-valor inicial (0)
-index (index da iteracao inicial - opcional)
*/

const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {
    console.log("acumulador: " + accumulator)
    console.log("current value: " + currentValue)
    console.log("index: " +index)


    console.log("soma: " + accumulator + currentValue)

    console.log("######")

    return accumulator + currentValue

}, 0)
/*
 acumulador: 0
current value: 1
index: 0
soma: 01
######
acumulador: 1
current value: 2
index: 1
soma: 12
######
acumulador: 3
current value: 3
index: 2
soma: 33
######
acumulador: 6
current value: 4
index: 3
soma: 64
######
acumulador: 10
current value: 5
index: 4
soma: 105
######
*/