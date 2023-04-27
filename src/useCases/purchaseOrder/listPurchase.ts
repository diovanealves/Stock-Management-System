import { Request, Response } from "express";
import { purchaseOrder } from "../../models/purchaseOrder";

export async function listPurchase(req: Request, res: Response) {
  try {
    const products = await purchaseOrder.find();
    res.json(products);
  } catch (err) {
    res.status(500).send(err);
  }
}
