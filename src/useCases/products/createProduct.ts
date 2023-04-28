import { Request, Response } from "express";
import z from "zod";
import { Product } from "../../models/product";

const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  quantity: z.number(),
  price: z.number(),
  categoryId: z.string(),
  responsible: z.string(),
});

export async function createProduct(req: Request, res: Response) {
  try {
    const { name, description, quantity, price, categoryId, responsible } =
      productSchema.parse(req.body);

    const product = await Product.create({
      name,
      description,
      quantity,
      price,
      categoryId,
      responsible,
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).send({ error: "Error creating product", message: err });
  }
}
