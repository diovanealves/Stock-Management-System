import { model, Schema } from "mongoose";

const purchaseOrderSchema = new Schema({
  responsible: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enem: ["Entrada", "Devolução"],
    default: "Entrada",
  },
  createdAt: {
    type: String,
    required: true,
  },
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
});

export const purchaseOrder = model("purchaseOrder", purchaseOrderSchema);
