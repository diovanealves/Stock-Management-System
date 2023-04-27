import { Request, Response } from "express";
import dayjs from "dayjs";
import { Product } from "../../models/product";
import { Order } from "../../models/order";

export async function updateSale(req: Request, res: Response) {
  const { responsible, quantity, productId } = req.body;

  try {
    const formattedDate = dayjs().format("DD-MM-YYYY HH:mm");

    const updateProduct = await Product.findByIdAndUpdate(
      productId,
      { $inc: { quantity: -quantity } },
      { new: true }
    );

    if (!updateProduct) return res.status(400).send("Produto não encontrado");

    if (updateProduct?.quantity <= 0) {
      return res
        .status(400)
        .send("Quantidade maior do que a disponível em estoque");
    }

    const input = new Order({
      productId: productId,
      responsible: responsible,
      quantity: quantity,
      createdAt: formattedDate,
      status: "Saída",
    });
    await input.save();

    return res.status(201).json(updateProduct);
  } catch (err) {
    res.status(500).send(err);
  }
}
