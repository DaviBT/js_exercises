// remove items
let nomes = ["conor", "jon jones", "anderson silva", "dana white"]
var removed = nomes.splice(1, 1)

console.log(removed)
// [ 'jon jones' ]



let times = ["real madrid", "barcelona", "psg", "napoli"]
let timesRemoved = times.splice(1, 2)
// splice(pos incial, number of items removed)

console.log(timesRemoved)
// [ 'barcelona', 'psg' ]



// add items
let countrys = ["brazil", "usa", "russia", "argentina"]
let countrysAdded = countrys.splice(2, 0, "peru")

console.log(countrys)
// [ 'brazil', 'usa', 'peru', 'russia', 'argentina' ]



// replace
let objects = ["mouse", "keyboard", "desktop", "phone"]
let objectsReplaced = objects.splice(2, 1, "chair")

console.log(objects)
console.log(objectsReplaced)
// [ 'mouse', 'keyboard', 'chair', 'phone' ]
// [ 'desktop' ]