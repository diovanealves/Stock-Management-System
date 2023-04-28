import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  responsible: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Category = model("Category", categorySchema);
