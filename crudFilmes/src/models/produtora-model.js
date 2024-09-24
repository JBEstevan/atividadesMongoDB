import conn from "../../conn.js"

const Schema = conn.Schema;

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


const Produtora = conn.model("produtora", produtoraSchema);

export default Produtora;