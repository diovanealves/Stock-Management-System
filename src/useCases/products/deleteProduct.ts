import { Request, Response } from "express";
import { Product } from "../../models/product";

export async function deleteProduct(req: Request, res: Response) {
  const { productId } = req.params;

  try {
    await Product.findByIdAndDelete(productId);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
}
