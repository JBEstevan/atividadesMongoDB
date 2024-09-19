import db from "../conn.js"; // const db = require("../db.js")

const Schema = conn.Schema;

const bichoSchema = new Schema({
numeroEscolhido: {

},
vencedores: {

},
dataInicio: {
    type: Date,
    required: true,
},
dataFim: {
    type: Date,
    required: true,
    },
});

const Bicho = conn.model("Bicho", bichoSchema);

export default Bicho;