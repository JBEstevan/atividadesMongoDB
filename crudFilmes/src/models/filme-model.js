import conn from "../../conn.js"
//NO MODELO EU COLOCO QUAIS OS POSSÍVEIS TIPOS DE DOCUMENTOS VOU TER
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
        enum: ["TERROR", "ROMANCE", "COMÉDIA"],
        required: true,
        default: "COMÉDIA"
    }
})

const Filme = conn.model("filme", filmeSchema);

export default Filme;