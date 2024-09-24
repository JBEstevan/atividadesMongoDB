import e from "express";
import diretorController from "../controllers/diretor-controller.js";

const router = e.Router()

router.post("/", diretorController.store)
router.get("/", diretorController.index)
router.get("/:id", diretorController.show)
router.put("/:id", diretorController.update)

export default router