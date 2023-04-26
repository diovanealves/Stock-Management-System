import { Request, Response } from "express";

import { Category } from "../../models/category";

export async function createCategory(req: Request, res: Response) {
  const { name } = req.body;

  try {
    const category = await Category.create({
      name,
    });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).send(err);
  }
}
