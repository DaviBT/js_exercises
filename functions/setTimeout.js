console.log("antes da função de timeout")

setTimeout(function teste(){
    console.log('Teste do timeout');
}, 2000)

console.log("após a função de timeout")

// output:
/*
antes da função de timeout
após a função de timeout
Teste do timeout
*/