import conn from "../conn.js"

const Schema = conn.Schema;

const filmeSchema = new Schema({
    titulo: {
        type: Schema.Types.String,
        required: true,
    },
    anoFilme: {
        type: Schema.Types.Date,
        required: true
    },
    genero: {
        type: Schema.Types.String,
        required: true
    }
})

const diretorSchema = new Schema({
    enderecoDiretor: {
        type: Schema.Types.String,
        required: true
    },
    telefonesDiretor: [{
        type: Schema.Types.Number,
        required: true
    }],
    anoDiretor: {
        type: Schema.Types.Date,
        required: true
    },
})

const produtoraSchema = new Schema({
    nomeProdutora: {
        type: Schema.Types.String,
        required: true
    },
    enderecoProdutora: {
        type: Schema.Types.String,
        required: true
    },
    telefonesProdutora: [{
        type: Schema.Types.Number,
        required: true
    }],
})


const Filme = conn.model("filme", filmeSchema);

export default Filme;