
export default class Animal {
    constructor(specie, sound){
        this.specie = specie,
        this.sound = sound;
    }

    makeSound(){
        console.log(`${this.specie} does ${this.sound}`)
    }
}

