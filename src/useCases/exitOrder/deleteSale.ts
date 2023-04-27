import { Request, Response } from "express";
import { Product } from "../../models/product";
import { Order } from "../../models/order";

export async function deleteSale(req: Request, res: Response) {
  const { deleteSale } = req.params;

  try {
    const sale = await Order.findById(deleteSale);

    if (!sale)
      return res.status(404).send({ message: "Produto Não Encontrado" });

    const { quantity, productId } = sale;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $inc: { quantity: +quantity } },
      { new: true }
    );

    await Order.deleteOne();
    res.status(200).send(updatedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
}
