import { Router } from "express";
import {
  getTabla,
  getFormularios,
  getFormulario,
  createFormulario,
  deleteFormulario,
  updateFormulario,
} from "../controllers/tasks.controllers.js";
// rutas del servidor, manda a traer los controladores para cada ruta
const router = Router();

router.get("/tabla", getTabla);

router.get("/formulario", getFormularios);

router.get("/formulario/:id", getFormulario);

router.post("/formulario", createFormulario);

router.post("/actualizarFormulario/:id", updateFormulario);

router.get("/borrarFormulario/:id", deleteFormulario);

export default router;

