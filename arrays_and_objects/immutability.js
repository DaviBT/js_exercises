const address1 = {
    street: "Av. Brasil",
    number: 20
}

// não é uma cópia
// const address2 = address1

const address2 = { ...address1, number: 30}
console.log(address1, address2)
// { street: 'Av. Brasil', number: 20 } { street: 'Av. Brasil', number: 30 }


