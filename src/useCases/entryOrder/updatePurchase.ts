import { Request, Response } from "express";
import z from "zod";
import dayjs from "dayjs";
import { Product } from "../../models/product";
import { Order } from "../../models/order";

const updatePurchaseSchema = z.object({
  responsible: z.string(),
  quantity: z.number(),
  status: z.enum(["Entrada", "Devolução"]),
  productId: z.string(),
});

export async function updatePurchase(req: Request, res: Response) {
  try {
    const { responsible, quantity, status, productId } =
      updatePurchaseSchema.parse(req.body);
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
