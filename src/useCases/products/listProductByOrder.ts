import { Request, Response } from "express";
import z from "zod"
import { Order } from "../../models/order";

const productIdSchema = z.object({
  productId: z.string(),
})

const statusSchema = z.object({
  status: z.string().optional(),
})

export async function ListProductByOrder(req: Request, res: Response) {
  try {
    const { productId } = productIdSchema.parse(req.params)
    const { status } = statusSchema.parse(req.body)

    const query = Order.find({ productId });
    if (status) {
      query.where('status', status);
    }
    const ordens = await query.populate('productId');

    res.json(ordens)
  } catch (err) {
    console.log(err)
  }
}