import mongoose from 'mongoose';

const ResponsesSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
      required: true,
    },
    description: {
      type: String,
      maxLength: 400,
      required: true,
    },
    hide: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
export default mongoose.model('Responses', ResponsesSchema);
