// extends -> herança

class Animal {
    constructor(name){
        this.name = name;
    }

    makeNoise(name){
        console.log("noise from " + name )
    }
}

class Dog extends Animal {

}

const dog = new Dog;
dog.makeNoise("Dog");
// noise from Dog


class Cat extends Animal{
    makeNoise(){
        console.log("meow")
    }

    jump(){
        console.log("jumping")
    }
}

const cat = new Cat;
cat.makeNoise();
// output meow
cat.jump();
// jumping