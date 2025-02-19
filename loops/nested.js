let number = 5

for(i = 0; i <= number; i++){
    let pattern = '';

    for(j = 1; j < number; j++){
        pattern += '* '
    }

    console.log(pattern)
}