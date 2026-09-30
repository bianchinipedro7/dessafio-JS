interface Produto {
    modelo: string;
    cor: string;
    preco: number;
    tamanhosDisponiveis: number[];
    quantidadesDisponiveis: number
}

export class AtributosDeProdutos implements Produto {
    constructor(
        public modelo: string,
        public cor: string,
        public preco: number,
        public tamanhosDisponiveis: number[],
        public quantidadesDisponiveis: number
    ) { }
}

