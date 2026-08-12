function validateData(data) {
    if (Array.isArray(data) && data.length > 0) {
        return {
            msg: 'Sucesso',
            resultado: data
        }
    } else {
        return {
            msg: 'Erro'
        }
    }
}

function validateId(id) {
    if (id > 0 && typeof id === 'number') {
        return {
            msg: 'Sucesso.',
            resultado: id
        }
    } else {
        return {
            msg: 'Erro'
        }
    }
}

function isValidEmail(email) {
    if (email.includes("@") && email.includes(".com")) {
        return {
            msg: 'Sucesso',
            resultado: email
        }
    } else {
        return {
            msg: 'Erro'
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

    if (password.length >= 6 && temNumeroNaSenha === true) {
    return {
            msg: 'Sucesso',
            resultado: password
        }
    } else {
        return {
            msg: 'Erro'
        }
    }
}

function validateUser(user, data) {
    console.log('oi')
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