import { Request, Response } from "express";
import dayjs from "dayjs";
import { Product } from "../../models/product";
import { Order } from "../../models/order";

export async function updatePurchase(req: Request, res: Response) {
  const { responsible, quantity, status, productId } = req.body;

  try {
    const formattedDate = dayjs().format("DD-MM-YYYY HH:mm");

    const updateProduct = await Product.findByIdAndUpdate(
      productId,
      { $inc: { quantity: +quantity } },
      { new: true }
    );

    const input = new Order({
      productId: productId,
      responsible: responsible,
      quantity: quantity,
      createdAt: formattedDate,
      status: status,
    });
    await input.save();

    return res.status(201).json(updateProduct);
  } catch (err) {
    res.status(500).send(err);
  }
}
