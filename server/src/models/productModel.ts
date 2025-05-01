import mongoose, { Document, Schema } from 'mongoose';

// Define an interface that extends Document
interface IProduct extends Document {
  name: string;
  price: number;
}

const productSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model<IProduct>('Product', productSchema);
