// rest ou args representa um numero indefinido de argumentos como uma array

function values(a, ...rest){
    console.log(a);
    console.log(...rest);
}

values(2, 1, 3, 4)
// output:
// 2
// 1 3 4




function names(...args){
    console.log(args);
    console.log(...args);
    console.log(args.length);
}

names("John", "Doe", "Smith")

// output:
// [ 'John', 'Doe', 'Smith' ]
// John Doe Smith
// 3