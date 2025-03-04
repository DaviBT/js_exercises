export { User }

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    printInfo(){
        console.log(`${this.name} has the email ${this.email}`)
    }
}

