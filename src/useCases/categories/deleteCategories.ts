import { Request, Response } from "express";
import { Category } from "../../models/category";

export async function deleteCategories(req: Request, res: Response) {
  const { categoryId } = req.params;
  try {
    await Category.findByIdAndDelete(categoryId);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
}
