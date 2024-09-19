import e from "express"
import bichoController from "../controllers/bicho-controller.js"

const router = e.Router()

router.post("/", jogoController.store)
router.get("/", jogoController.index)
router.get("/:id", jogoController.show)
router.update("/:id", jogoController.update)
router.delete("/:id", jogoController.delete)