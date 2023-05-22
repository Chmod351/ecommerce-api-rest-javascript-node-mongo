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
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
      maxLength: 200,
    },
    hide: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
export default mongoose.model('Comment', CommentSchema);
