import db from "../conn.js"; // const db = require("../db.js")

const Schema = db.Schema;

const jogoSchema = new Schema({
nome: {
    type: String,
    required: true,
},
});

const Jogo = db.model("Jogo", jogoSchema);

export default Jogo;