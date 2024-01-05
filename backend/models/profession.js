const {Schema, model} = require('mongoose')


const Profession = new Schema({
    name: {type: String},
})

module.exports = model('Profession', Profession)