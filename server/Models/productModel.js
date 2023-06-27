import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      maxLength: 150,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      maxLength: 400,
      required: true,
    },
    size: {
      type: Array,
      required: true,
    },
    color: {
      type: Array,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    tags: {
      type: [
        {
          type: String,
          enum: ['coats', 'jackets', 'shirts'],
        },
      ],
    },
    hot: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
export default mongoose.model('Product', ProductSchema);
