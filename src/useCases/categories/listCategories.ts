import { Request, Response } from "express";
import { Category } from "../../models/category";

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Error listing the categories", message: err });
  }
}
