import { Request, Response } from "express";
import z from "zod";
import { Category } from "../../models/category";

const categorySchema = z.object({
  name: z.string(),
  responsible: z.string(),
});

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, responsible } = categorySchema.parse(req.body);

    const category = await Category.create({
      name,
      responsible,
    });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).send({ error: "Error creating a category", message: err });
  }
}
