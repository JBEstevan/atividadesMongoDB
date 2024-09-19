import conn from "../conn.js"; // const db = require("../db.js")

const Schema = conn.Schema;

const bichoSchema = new Schema({
    nome: {
        type: Schema.Types.String,
        required: true
    },
    numeros: {
        type: [Schema.Types.Number],
        min: 0,
        max: 99,
        validate: function(v) {
            return v.length == 4 && v.every(n => n >= 0 && n < 100)
        }
    }
})

const apostaSchema = new Schema({
valor: {
    type: Schema.Types.Number,
    min: 0,
    required: true,
},
retorno: {
    type: Schema.Types.Number,
    required: false,
    default: 0
},
numeros: {
    type: [Schema.Types.Number],
    validate(v) {
        return v.length % 4 == 0 && v.length <= 20
    },
    required: true,
},
chavePix: {
    type: Schema.Types.String,
    required: true,
    },
jogo: {
    type: Schema.Types.ObjectId,
    ref: "Jogo"
},
},
{
    timeStamps: true
}
);

const Aposta = db.model("Aposta", apostaSchema);

export default Aposta;