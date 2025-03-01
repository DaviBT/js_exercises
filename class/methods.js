class User {
    constructor(name, email){
        this.name = name
        this.email = email
    }
    sendEmail(){
        console.log(`email enviado para ${this.email}`)
    }
    
}

const user = new User("McGregor", "onotorio@gmail.com")
user.sendEmail()
// output: email enviado para onotorio@gmail.com