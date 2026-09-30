const baseDeDadosUsuarios = require("../data/usuarios"); // Importando a base de dados de usuários(usuarios.js)
const ValidadorDeUsuario = require("../validators/validadordeusuarios");

class RepositorioDeUsuarios {

    //Aqui foi criado a classe UserRepository que irá conter todos os metodos relacionados aos Usuários (register, getAll)

    constructor() {
        this.usuarios = baseDeDadosUsuarios
    }

    // Método para criar um ID de forma dinâmica para cada novo usuário criado, e que em seguida, adiciona o novo usuário na base de dados usando PUSH
    metodoregistrarUsuario(usuario) {
        const validador = new ValidadorDeUsuario(usuario.email, usuario.senha)  //Preciso entender melhor isso
        validador.metodoValidadorDeEmailESenha()
        if (validador.usuarioStatus.email == true && validador.usuarioStatus.senha == true) {
            const id = this.usuarios.length + 1
            usuario.id = id
            this.usuarios.push(usuario)
        }else{
            console.log('Usuário não pôde ser validado.')
        }
    } 

    metodoAlterarEmailUsuario(idDoUsuario, emailDoUsuario) {
        for (const usuario of this.usuarios) {
            if (usuario.id == idDoUsuario) {
                usuario.email = emailDoUsuario
                return usuario
            }
        }

    }

    metodoEncontrarUsuarioPeloNome(nomeDoUsuario) {
        for (const usuario of this.usuarios) {
            if (usuario.nome == nomeDoUsuario) {
                return usuario
            }
        }
        return 'Este usuário não foi encontrado'
    }

    metodoRemoverUsuarioPeloId(idDoUsuario) {
        for (let index = 0; index < this.usuarios.length; index++) {
            const usuario = this.usuarios[index];
            if (usuario.id == idDoUsuario) {
                this.usuarios[index] = null
            }
        }
    }

    metodoEncontrarUsuarioPeloId(idDoUsuario) {
        for (const usuario of this.usuarios) {
            if (usuario.id == idDoUsuario) {
                return usuario
            }
        }
        return 'Este usuário não foi encontrado'
    }

    exibirTodos() { // Método usado para exibir toda a base de dados de produtos via console.log
        console.log(this.usuarios)
    }

}

module.exports = RepositorioDeUsuarios; //Exportando este documento

// Relembrando:
// Classe: Estrutura que criamos para guardar os métodos que serão usados na entidade
// Método: Um bloco de código reutilizável (como uma função) que define um comportamento ou executa uma ação específica da classe