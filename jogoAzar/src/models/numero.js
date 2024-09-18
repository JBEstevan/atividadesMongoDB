import db from "../conn.js"; // const db = require("../db.js")

const Schema = db.Schema;

const numeroSchema = new Schema({
numero: {
    type: Number,
    required: true,
},
});

const Numero = db.model("Numero", numeroSchema);

export default Numero;