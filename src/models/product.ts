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
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
});

export const Product = model("Product", productSchema);
