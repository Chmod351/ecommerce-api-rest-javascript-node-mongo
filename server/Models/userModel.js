import mongoose from 'mongoose';
import validator from 'email-validator';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      maxLength: 20,
      minlength: 3,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      maxLength: 255,
      minlength: 8,
      required: true,
    },
    email: {
      type: String,
      maxLength: 50,
      minlength: 10,
      required: true,
      unique: true,
      validate: {
        validator: (email) => validator.validate(email),
        message: 'Invalid email format',
      },
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    hide: {
      type: Boolean,
      default: false,
    },
    wishList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model('User', UserSchema);
