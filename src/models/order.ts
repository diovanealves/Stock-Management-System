import { model, Schema } from "mongoose";

const orderSchema = new Schema({
  responsible: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enem: ["Entrada", "Devolução", "Saída"],
    default: "Entrada",
  },
  createdAt: {
    type: String,
    required: true,
  },
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
});

export const Order = model("Order", orderSchema);
