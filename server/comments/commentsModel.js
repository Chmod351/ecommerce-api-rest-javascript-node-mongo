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
      required: true,
      maxLength: 200,
      minlength: 50,
    },
    calification: {
      type: Number,
      default: 10,
      min:1,
      max: 10,
    },
    hide: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Comment', CommentSchema);
