const baseDeDadosProdutos = require("../data/produtos");

class ValidadorDeProduto {
    constructor() {
        this.produtos = baseDeDadosProdutos
        this.produtoStatus = {
            modelo: false,
            tamanho: false,
            preco: false,
            quantidade: false
        }
    }

    metodoValidadorDeProdutoRepetido(modeloDoProduto) { //inverti true e false
        for (const produto of this.produtos) {
            if (produto.modelo == modeloDoProduto) {
                this.produtoStatus.modelo = true
            }
        }
        this.produtoStatus.modelo = false
    }

    metodoValidadorDeTamanhosValidos(tamanhoDoProduto) { //vai precisar de for para esse?  -------
        for (const tamanho of this.produtos) {
            if (tamanho < 38 || tamanho > 43) {
                this.produtoStatus.tamanho = false
            }
        }
        this.produtoStatus.tamanho = true
    }

    metodoValidadorDePreco(precoDoProduto) { // Checar se o preço é um número ------
        const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (const numerosDaListaNumeros of numeros) {
            if (precoDoProduto.includes(numerosDaListaNumeros)) {
                this.produtoStatus.preco = true
            }
        }
        this.produtoStatus.preco = false
    }

    metodoValidadorDeQuantidadesValidas(quantidadeDoProduto) { //Checar se a quantidade digitada é um numero e se é maior que 0 -------
        const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (const numerosDaListaNumeros of numeros) {
            if (quantidadeDoProduto.includes(numerosDaListaNumeros)) {
                if (quantidadeDoProduto > 0)
                    this.produtoStatus.quantidade = true
            }
        }
        this.produtoStatus.quantidade = false
    }

    metodoValidadorDeProdutosGeral() { //Executar todos os métodos

    }

}

module.exports = ValidadorDeProduto