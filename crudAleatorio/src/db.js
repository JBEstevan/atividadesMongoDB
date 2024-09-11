const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://jbeestevan:xLNCcqwzKeffWuyT@cluster0.28ovm.mongodb.net/";

async function main() {
    await mongoose.connect(mongoDB);
}

main()
    .then(() => console.log("conectado com o banco"))
    .catch((err) => console.log(err));

module.exports = mongoose;