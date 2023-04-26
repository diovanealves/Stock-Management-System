import { Router } from "express";

import { listCategories } from "./useCases/categories/listCategories";
import { createCategory } from "./useCases/categories/createCategories";
import { deleteCategories } from "./useCases/categories/deleteCategories";

const routes = Router();

routes.get("/categories", listCategories);
routes.post("/categories", createCategory);
routes.delete("/categories/:categoryId", deleteCategories);

export default routes;
