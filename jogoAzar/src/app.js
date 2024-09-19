import "dotenv/config";
import e from "express";
import jogoRouter from

app.use(e.json())
app.use("/jogo", jogoRouter)
app.use("/bicho", bichoRouter)
app.use("/aposta", apostaRouter)

app.listen(process.env.API_PORT, => )


console.log(process.env);

