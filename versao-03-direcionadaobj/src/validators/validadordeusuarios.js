const baseDeDadosUsuarios = require("../data/usuarios")

class ValidadorDeUsuario {
    constructor(email, senha) {
        this.email = email
        this.usuarios = baseDeDadosUsuarios
        this.senha = senha
        this.usuarioStatus = {
            email: false,
            senha: false
        }
    }

    // Aqui eu separei a validação do email em duas funções, uma para veriricar a digitação e outra para verificar se estava repetido. Porque eu estava escrevendo de forma que o teste de verificação estava sendo feito antes da verificação de digitação. Deixando o codigo mais eficiente.

    metodoValidadorDeDigitacaoDeEmail() {
        if (this.email.includes('@')) {
            if (this.email.includes('.com')) {
                this.usuarioStatus.email = true
            }
        } else {
            this.usuarioStatus.email = false
        }
    }
    metodoValidadorDeEmailRepetido() {
        if (this.usuarioStatus.email == true) {
            for (const usuario of this.usuarios) {
                if (this.email == usuario.email) {
                    this.usuarioStatus.email = false
                }
            }
            this.usuarioStatus.email = true
        }

    }

    metodoValidadorDeSenha() {
        if (this.senha.length <= 4) {
            this.usuarioStatus.senha = false
            return false
        }
        const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (const numerosDaListaNumeros of numeros) {
            if (this.senha.includes(numerosDaListaNumeros)) {
                this.usuarioStatus.senha = true
                return true
            }
        }
    }

    // Aqui, para não ter que alterar o código que já tava escrito em repositorio, eu juntei os resultados dos métodos, retornando sucesso para puxar la no repositorio

    metodoValidadorDeEmailESenha() {
        this.metodoValidadorDeDigitacaoDeEmail()
        this.metodoValidadorDeEmailRepetido()
        this.metodoValidadorDeSenha()
    }
}
module.exports = ValidadorDeUsuario 

