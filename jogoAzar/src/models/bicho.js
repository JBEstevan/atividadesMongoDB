import db from "../conn.js"; // const db = require("../db.js")

const Schema = db.Schema;

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

const Bicho = db.model("Bicho", bichoSchema);

export default Bicho;