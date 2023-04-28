import { Request, Response } from "express";
import { Product } from "../../models/product";

export async function listProduct(req: Request, res: Response) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send({ error: "Error listing products", message: err });
  }
}
