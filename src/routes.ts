import { Router } from "express";

import { listCategories } from "./useCases/categories/listCategories";
import { createCategory } from "./useCases/categories/createCategories";
import { deleteCategories } from "./useCases/categories/deleteCategories";
import { listProductsByCategory } from "./useCases/categories/listProductsByCategory";
import { createProduct } from "./useCases/products/createProduct";
import { listProduct } from "./useCases/products/listProducts";
import { deleteProduct } from "./useCases/products/deleteProduct";

const routes = Router();

routes.get("/categories", listCategories);
routes.post("/categories", createCategory);
routes.delete("/categories/:categoryId", deleteCategories);
routes.get("/categories/:categoryId/products", listProductsByCategory);
routes.get("/products", listProduct);
routes.post("/products", createProduct);
routes.delete("/products/:productId", deleteProduct);

export default routes;
