import { Request, Response } from "express";
import { Order } from "../../models/order";

export async function listSale(req: Request, res: Response) {
  try {
    const order = await Order.find({ status: "Saída" });
    res.json(order);
  } catch (err) {
    res.status(500).send(err);
  }
}
