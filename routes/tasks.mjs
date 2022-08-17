import { Router } from "express";
import {
	addTask,
	deteleTask,
	editTask,
	getAllTaks,
	getTask,
	markAsDone,
} from "../controllers/tasks.mjs";
import auth from "../middleware/auth.mjs";

const router = Router();

router.use(auth);
router.get("/", getAllTaks);
router.get("/:id", getTask);
router.post("/add", addTask);
router.put("/edit/:id", editTask);
router.put("/mark-as-done/:id", markAsDone);
router.delete("/delete/:id", deteleTask);

export default router;
