class AtributosDeProdutos {

    //Aqui foi criado a classe AtributosDeprodutos que especifica quais "características (atributos) que os produtos terão (id, modelo, cor, preco, tamanhosDisponiveis, quantidadesDisponiveis)"

    constructor(modelo, cor, preco, tamanhosDisponiveis, quantidadesDisponiveis) {
        this.modelo = modelo
        this.cor = cor
        this.preco = preco
        this.tamanhosDisponiveis = tamanhosDisponiveis
        this.quantidadesDisponiveis = quantidadesDisponiveis
        //Todos os produtos terão estes atributos
    }
}

module.exports = AtributosDeProdutos //Exportando este documento