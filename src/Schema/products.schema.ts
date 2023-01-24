import { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true, // trim whitespace
      maxLength: [100, "Product name cannot exceed 100 characters"],
      minLength: [3, "Product name cannot be less than 3 characters"],
      unique: true, // unique
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      minLength: [0, "Price cannot be less than 0"],
    },
    discountPercentage: {
      type: Number,
      required: true,
      minLength: [0, "Discount percentage cannot be less than 0"],
    },
    stock: {
      type: Number,
      required: true,
      minLength: [0, "Stock cannot be less than 0"],
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
    },
    brand: {
      type: String,
      required: true,
    },
    catagories: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default productSchema;
