// Este arquivo é responsável por executar os métodos criados na pasta Repositories

// Importações de Documentos 
const AtributosDeProdutos = require("./src/models/produto") //Importação de produto.js (atributos / características)
const AtributosDeUsuarios = require("./src/models/usuario") //Importação de usuario.js (atributos / características)
const RepositorioDeUsuarios = require("./src/repositories/repositoriodeusuarios") // Require puxou automático após a instância de repositório
const RepositorioDeProdutos = require("./src/repositories/repositoriodeprodutos") // Require puxou automático após a instância de repositório

// Instâncias Repositórios

const Usuarios = new RepositorioDeUsuarios()                
const Produtos = new RepositorioDeProdutos()

// Instâncias Modelos (Produtos e usuáros que serão inseridos na base de dados, dentro do parênteses vão os respectivos atributos criados nos arquivos dentro models)

//Criando modelos (novos usuários e produtos)
//const usuario1 = new AtributosDeUsuarios('Pedro Henrique', 'pedro@email.com', 1234)
// const usuario2 = new AtributosDeUsuarios('Lebron James', 'lebron@email.com', 1234)
// console.log(usuario1)

const produto1 = new AtributosDeProdutos('Macbook Air M5', 'Midnight Blue', 1300, '13" or 15"', 100)  // trocar para um tenis
const produto2 = new AtributosDeProdutos('iPhone 17 Pro Max', 'White and Coral', 300, 'L2 or L3', 20) // trocar para um tenis

// // Executando métodos de Produtos
Produtos.metodoRegistrarProduto(produto1)
console.log(Produtos.metodoRegistrarProduto(produto2))
// // console.log(Produtos.alterarNomeDoModeloDoProduto(1, "iPhone 18 PRO MAX"))
// // console.log(Produtos.metodoRemoverProdutoPeloId(1))
Produtos.exibirTodos()
// // console.log(Produtos.metodoEncontrarProdutoPeloModelo('Macbook Air M5'))

// // Executando métodos de Usuários
//Usuarios.metodoregistrarUsuario(usuario1)
//Usuarios.metodoregistrarUsuario(usuario2)
// // console.log(Usuarios.metodoAlterarEmailUsuario(7, "lebronthegoat@email.com"))
// // console.log(Usuarios.metodoRemoverUsuarioPeloId(4))
// Usuarios.exibirTodos()
// // console.log(Usuarios.metodoEncontrarUsuarioPeloNome('Lebron James'))

// //Homework

// //Validador de email .com e @ + repetido (deu certo mas tive ajuda)
// //Validador de senha 4 ou mais + numeros 
// //Validador de produto repetido
// //Fazer gerar ID para registrar produto