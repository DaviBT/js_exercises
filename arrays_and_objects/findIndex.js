const values = [4, 5, 6, 7, 8]

let biggerThanSix = values.findIndex((value) => value > 6) 
console.log(biggerThanSix)
// output: 3
// (7 esta na posicao 3 da array)


console.log(values[biggerThanSix])
// 7