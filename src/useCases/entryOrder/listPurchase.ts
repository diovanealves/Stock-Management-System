import { Request, Response } from "express";
import { Order } from "../../models/order";

export async function listPurchase(req: Request, res: Response) {
  try {
    const order = await Order.find({
      status: { $in: ["Entrada", "Devolução"] },
    });
    res.json(order);
  } catch (err) {
    res.status(500).send({ error: "Error listing an entry", message: err });
  }
}
