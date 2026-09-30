const baseDeDadosProdutos = require("../data/produtos") // Importando a base de dados de produtos (products.js)
const ValidadorDeProduto = require("../validators/validadoedeprodutos")

class RepositorioDeProdutos {

    // Aqui foi criado a classe RepositorioDeProdutos que irá conter todos os métodos relacionados aos produtos (push, getAll)

    constructor() {
        this.produtos = baseDeDadosProdutos
    }

    metodoRegistrarProduto(produto) {
        const validador = new ValidadorDeProduto()
        validador.metodoValidadorDeProdutoRepetido(produto.modelo)
        if (validador.produtoStatus.modelo == false) {
            return 'Este produto já foi cadastrado'
        }
        const id = this.produtos.length + 1
        produto.id = id 
        this.produtos.push(produto)
    }

    metodoEncontrarProdutoPeloModelo(modeloDoProduto) {
        for (const produto of this.produtos) {
            if (produto.modelo == modeloDoProduto) {
                return produto
            }
        }
        return 'Este produto não existe'
    }

    alterarNomeDoModeloDoProduto(idDoProduto, modeloDoProduto) {
        for (const produto of this.produtos) {
            if (produto.id == idDoProduto) {
                produto.modelo = modeloDoProduto
                return produto
            }
        }
    }

    metodoEncontrarProdutoPeloId(idDoProduto) {
        for (const produto of this.produtos) {
            if (produto.id == idDoProduto) {
                return produto
            }
        }
        return 'Este produto não existe'
    }

    metodoRemoverProdutoPeloId(idDoProduto) {
        for (let index = 0; index < this.produtos.length; index++) {
            const produto = this.produtos[index];
            if (produto.id == idDoProduto) {
             this.produtos[index] = null   
            }

        }
    }

    exibirTodos() { // Método (parecido com uma função) usado para exibir toda a base de dados de produtos via console.log
        console.log(this.produtos)
    }

}

module.exports = RepositorioDeProdutos //Exportando este documento

// Relembrando:
// Classe: Estrutura que criamos para guardar os métodos que serão usados na entidade
// Método: Um bloco de código reutilizável (como uma função) que define um comportamento ou executa uma ação específica da classe
