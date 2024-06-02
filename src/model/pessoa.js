const mongoose = require('mongoose');

const { Schema } = mongoose;

const pessoaSchema = new Schema(
  {
    nome: { required: true, type: String },    
    email: { required: true, unique: true, type: String },
    senha: { required: true, type: String },    
    imagemPerfilUrl: { type: String } // Adicionado campo para imagem de perfil
  },
  { collection: 'pessoa' },
);

const Pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = { Pessoa, pessoaSchema };
