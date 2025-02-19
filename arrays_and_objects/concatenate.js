let nomes = ["conor", "jon jones", "anderson silva"]
let employees = ["toreto", "neymar"]

let famousPeople = [...nomes, ...employees]
console.log(famousPeople)
// [ 'conor', 'jon jones', 'anderson silva', 'toreto', 'neymar' ]

let superstars = nomes.concat(employees)
console.log(superstars)
// [ 'conor', 'jon jones', 'anderson silva', 'toreto', 'neymar' ]