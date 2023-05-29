import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    calification: {
      type: Number,
      default: 5,
    },
    description: {
      type: String,
      maxLength: 400,
      required: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model('Comments', CommentSchema);
