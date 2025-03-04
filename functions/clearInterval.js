let interval = setInterval(function() {
    console.log("interval")
}, 500);

setTimeout(function(){
    console.log("stop the repetition")

    clearInterval(interval)
}, 1500)
/*
interval
interval
stop the repetition
*/