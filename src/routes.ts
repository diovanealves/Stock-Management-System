import { purchaseOrder } from "./models/purchaseOrder";
import { Router } from "express";

import { listCategories } from "./useCases/categories/listCategories";
import { createCategory } from "./useCases/categories/createCategories";
import { deleteCategories } from "./useCases/categories/deleteCategories";
import { listProductsByCategory } from "./useCases/categories/listProductsByCategory";
import { createProduct } from "./useCases/products/createProduct";
import { listProduct } from "./useCases/products/listProducts";
import { deleteProduct } from "./useCases/products/deleteProduct";
import { updatePurchase } from "./useCases/purchaseOrder/updatePurchase";
import { listPurchase } from "./useCases/purchaseOrder/listPurchase";
import { deletePurchase } from "./useCases/purchaseOrder/deletePurchase";

const routes = Router();

routes.get("/categories", listCategories);
routes.post("/categories", createCategory);
routes.delete("/categories/:categoryId", deleteCategories);
routes.get("/categories/:categoryId/products", listProductsByCategory);
routes.get("/products", listProduct);
routes.post("/products", createProduct);
routes.delete("/products/:productId", deleteProduct);
routes.get("/purchase", listPurchase);
routes.put("/purchase", updatePurchase);
routes.delete("/purchase/:purchaseId", deletePurchase);

export default routes;
