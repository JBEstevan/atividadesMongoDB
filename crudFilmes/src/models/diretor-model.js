import conn from "../conn.js"

const Schema = conn.Schema;

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


const Diretor = conn.model("diretor", diretorSchema);

export default Diretor;