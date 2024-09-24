import "dotenv/config";
import e from "express";
import diretor_router from "./src/routes/diretor-route.js"
import filme_router from "./src/routes/filme-route.js"
import produtora_router from "./src/routes/produtora-route.js"

const app = e();

app.use(e.json())

app.use("/diretor", diretor_router)
app.use("/filme", filme_router)
app.use("/produtora", produtora_router)
app.use("/user", user_router)


app.listen(process.env.API_PORT, () => {
    console.log(`Server running in port ${process.env.API_PORT}`)
});
