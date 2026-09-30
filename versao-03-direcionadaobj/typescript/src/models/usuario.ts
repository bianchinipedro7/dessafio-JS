export class Usuarios { //export no type script substitui o module.exports
    nome: string;
    email: string;
    senha: string;

    constructor(nome: string, email: string, senha: string){
        this.nome = nome;
        this.email = email;
        this.senha = senha
    }
}

