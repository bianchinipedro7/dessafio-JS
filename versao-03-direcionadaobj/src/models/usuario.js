class AtributosDeUsuarios {

    //Aqui foi criado a classe AtributosDeUsuarios que especifica quais "características (atributos)" os usuários terão (nome, email, senha)
    //lembrando que o ID será criado e adicionado dinamicamente pelo método em UserRepository.js

    constructor(nome, email, senha) {
        this.nome = nome
        this.email = email
        this.senha = senha
        //Todos os usuários terão estes atributos
    }
}

module.exports = AtributosDeUsuarios; //Exportando este documento