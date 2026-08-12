const usuarios = require("./src/data/users.js");
const { getAll, getById } = require("./src/functions/scripts");
const { isValidEmail } = require("./src/middleware/validations.js");
const { validateUser } = require("./src/middleware/validations.js");
const { validateProduct } = require("./src/middleware/validations.js");
const { isValidPassword } = require("./src/middleware/validations.js");
const { validateId } = require("./src/middleware/validations.js");
const { validateData } = require("./src/middleware/validations.js");



console.log(validateData([''])) 
console.log(validateId(1))
console.log(isValidEmail('lebron@gmail.com'))
console.log(isValidPassword('Senha123'))
console.log(validateUser(usuarios, 'lebron@email.com'))
validateProduct()
getAll()
getById()