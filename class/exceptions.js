const names = []

try{
    Object.execute()
} catch(error){
    if(error instanceof TypeError){
        console.log("método indisponivel")
    }
}
// output: método indisponivel




const array = [];

try{
    if(!array.includes(18)){
        throw new Error("o numero 18 não existe na array")
    }
} catch(error){
    console.log(error)
}
// output: Error: o numero 18 não existe na array