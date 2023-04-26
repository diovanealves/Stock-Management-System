import { Request, Response } from "express";
import { Product } from "../../models/product";

export async function createProduct(req: Request, res: Response) {
  const { name, description, quantity, price, category } = req.body;

  try {
    const product = await Product.create({
      name,
      description,
      quantity,
      price,
      category,
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).send(err);
  }
}
