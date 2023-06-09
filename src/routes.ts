import { Router } from "express";

import { createUser } from "./useCases/user/createUser";
import { listUser } from "./useCases/user/listUser";
import { authenticateUser } from "./useCases/user/authenticateUser";
import { forgotPasswordUser } from "./useCases/user/forgotPassword";
import { resetPassword } from "./useCases/user/resetPassword";
import { listCategories } from "./useCases/categories/listCategories";
import { createCategory } from "./useCases/categories/createCategories";
import { deleteCategories } from "./useCases/categories/deleteCategories";
import { listProductsByCategory } from "./useCases/categories/listProductsByCategory";
import { createProduct } from "./useCases/products/createProduct";
import { listProduct } from "./useCases/products/listProducts";
import { deleteProduct } from "./useCases/products/deleteProduct";
import { createPurchase } from "./useCases/entryOrder/createPurchase";
import { listPurchase } from "./useCases/entryOrder/listPurchase";
import { deletePurchase } from "./useCases/entryOrder/deletePurchase";
import { listSale } from "./useCases/exitOrder/listSale";
import { createSale } from "./useCases/exitOrder/createSale";
import { deleteSale } from "./useCases/exitOrder/deleteSale";
import { ListProductByOrder } from "./useCases/products/listProductByOrder";

const routes = Router();

routes.get("/user", listUser);
routes.post("/user", createUser);
routes.post("/authenticate", authenticateUser);
routes.post("/forgotPassword", forgotPasswordUser);
routes.post("/resetPassword", resetPassword);

routes.get("/categories", listCategories);
routes.post("/categories", createCategory);
routes.delete("/categories/:categoryId", deleteCategories);
routes.get("/categories/:categoryId/products", listProductsByCategory);

routes.get("/products", listProduct);
routes.post("/products", createProduct);
routes.post("/products/:productId", ListProductByOrder);
routes.delete("/products/:productId", deleteProduct);

routes.get("/entryOrder", listPurchase);
routes.put("/entryOrder", createPurchase);
routes.delete("/entryOrder/:purchaseId", deletePurchase);

routes.get("/exitOrder", listSale);
routes.put("/exitOrder", createSale);
routes.delete("/exitOrder/:deleteSale", deleteSale);

export default routes;
