import db from "../conn.js"; // const db = require("../db.js")

const Schema = db.Schema;

const apostaSchema = new Schema({
valor: {
    type: Number,
    required: true,
},
retorno: {
    type: Number,
    required: true,
},
numeros: {
    
},
chavePix: {
    type: String,
    required: true,
    },
createdAt: {
    type: Date,
    required: true,
},
jogo: {

},
});

const Aposta = db.model("Aposta", apostaSchema);

export default Aposta;