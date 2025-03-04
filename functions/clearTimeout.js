let x = 0

let timer = setTimeout(function(){
    console.log("x é 0")
}, 2000)

x = 5

if(x > 0){
    clearTimeout(timer)
    console.log('x is greater than 0')
}