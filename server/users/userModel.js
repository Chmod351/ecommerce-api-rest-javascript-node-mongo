import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: 20,
      minlength: 3,
      required: true,
    },
    password: {
      type: String,
      maxLength: 30,
      minlength: 8,
      required: true,
    },
    email: {
      type: String,
      maxLength: 50,
      minlength: 15,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    comments: [
      {
        comment: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment',
        },
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model('User', UserSchema);
