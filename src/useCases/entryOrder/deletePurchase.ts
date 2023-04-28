import { Request, Response } from "express";
import { Product } from "../../models/product";
import { Order } from "../../models/order";

export async function deletePurchase(req: Request, res: Response) {
  const { purchaseId } = req.params;

  try {
    const purchase = await Order.findById(purchaseId);

    if (!purchase)
      return res.status(404).send({ message: "Produto Não Encontrado" });

    const { quantity, productId } = purchase;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $inc: { quantity: -quantity } },
      { new: true }
    );

    await Order.deleteOne();
    res.status(200).send(updatedProduct);
  } catch (err) {
    res.status(500).send({ error: "Error deleting an entry", message: err });
  }
}
