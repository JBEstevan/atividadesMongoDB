import mongoose from "mongoose";


const main = async () => {
try {
    console.log("aqui1");
    await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.28ovm.mongodb.net/crudFilme`
   // "mongodb+srv://jbeestevan:yq070PHuCbD1VuOG@cluster0.28ovm.mongodb.net/" 
    // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRESS}${process.env.DB_NAME}`
    );
    console.log("aqui2");

    console.log("Connected with db")
} catch (error) {
    console.log(error);
}
};

main();

export default mongoose;