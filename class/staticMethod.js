// com o static antes do metodo, nao é necessário instanciar a classe para exibir o método

class User {
    static showMessage(){
        console.log("mensagem")
    }
}

// const user = new User;
// user.showMessage();

User.showMessage();
// output: mensagem