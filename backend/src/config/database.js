const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é Obrigatório."
mongoose.Error.messages.Number.max = "O valor do campo '{PATH}' extrapola o valor máximo de '{MAX}'."
mongoose.Error.messages.Number.min = "O valor do campo '{PATH}' extrapola o valor mínimo de '{MIN}'"
mongoose.Error.messages.String.enum = "'{VALUE}' O valor não obedece os critério de enumeração."