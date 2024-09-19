import e from "express"
import jogoController from "../controllers/jogo-controller"

const router = e.Router()

router.post("/", jogoController.store)
router.get("/", jogoController.index)
router.get("/:id", jogoController.show)
router.update("/:id", jogoController.update)
router.delete("/:id", jogoController.delete)