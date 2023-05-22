import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    hide: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
export default mongoose.model('Comment', CommentSchema);
