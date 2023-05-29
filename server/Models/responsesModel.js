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
      ref: 'Comments',
      required: true,
    },
    description: {
      type: String,
      maxLength: 400,
      required: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model('Responses', ResponsesSchema);
