import { Request, Response } from "express";
import dayjs from "dayjs";
import { Product } from "../../models/product";
import { purchaseOrder } from "../../models/purchaseOrder";

export async function updatePurchase(req: Request, res: Response) {
  const { responsible, quantity, status, productId } = req.body;

  try {
    const formattedDate = dayjs().format("DD-MM-YYYY HH:mm");
    const product = await Product.findById(productId);

    if (!product) return res.status(400).send({ message: "Product not found" });

    const updateProduct = await Product.findByIdAndUpdate(
      productId,
      { $inc: { quantity: quantity } },
      { new: true }
    );

    const input = new purchaseOrder({
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
