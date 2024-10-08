import mongoose from "mongoose";

const main = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADRESS}/${DB_NAME}`)
    } catch (error) {
        console.log(error);
    }
}

main()
.then(() => console.log("conectado com o banco"))
.catch((err) => console.log(err));

module.exports = mongoose;