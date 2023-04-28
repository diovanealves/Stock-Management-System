import { model, Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  responsible: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Product = model("Product", productSchema);
