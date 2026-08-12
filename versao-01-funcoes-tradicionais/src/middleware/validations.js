function validateData(data) {
    if (Array.isArray(data)) {
        if (data.length > 0) {
            return {
                msg: 'Sucesso',
                resultado: 'Base de dados segue os padroes de cadastro'
            }
        } else {
           return {
            msg: 'Erro',
            resultado: 'A base de dados enviada encontra-se vazia.'
           } 
        }
    } else {
        return {
            msg: 'Erro',
            resultado: 'Base de dados deve ser um array'
        }
    }
}

function validateId(id) {
    if (id > 0 && typeof id === 'number') {
        return {
            msg: 'Sucesso.',
            resultado: 'Id valido para cadastro'
        }
    } else {
        return {
            msg: 'Erro',
            resultado: 'Id invalido para cadastro'
        }
    }
}

function isValidEmail(email) {
    if (email.includes("@") && email.includes(".com")) {
        return {
            msg: 'Sucesso',
            resultado: 'Email valido para cadastro'
        }
    } else {
        return {
            msg: 'Erro',
            resultado: 'Email invalido'
        }
    }
}

function isValidPassword(password) {

    let temNumeroNaSenha = false

    for (const caractere of password) {
        if (!isNaN(caractere)) {
            temNumeroNaSenha = true
        }
    }

    if (password.length >= 6) {
        if (temNumeroNaSenha == true) {
            return {
                msg: 'Sucesso',
                resultado: 'Senha segue os padroes de cadastro'
            }
        } else {
            return {
                msg: 'Erro',
                resultado: 'Senha deve possuir pelo menos um numero'
            }
        }
    } else {
        return {
            msg: 'Erro',
            resultado: 'Senha deve possuir mais de 6 caracteres'
        }
    }
}

function validateUser(data, usuario) {
    for (const user of data) {
        if (user.email == usuario.email) {
            return {
                msg: 'Erro',
                resultado: 'Email ja cadastrado'
            }
        } else {
            return {
                msg: 'Sucesso.',
                resultado: usuario.email
            }
        }
    }
}

function validateProduct(product) {
    console.log('oi')
}

module.exports = {
    validateData,
    validateId,
    isValidEmail,
    isValidPassword,
    validateUser,
    validateProduct
}