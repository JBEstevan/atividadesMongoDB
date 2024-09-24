import e from "express";
import userController from "../controllers/user-controller.js";

const router = e.Router()

router.post("/", userController.store)
router.get("/", userController.index)
router.get("/:id", userController.show)
router.put("/:id", userController.update)

router.post("/signup", signup);
router.post("/login", login)

export default router