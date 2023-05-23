import mongoose from 'mongoose';
import validator from 'email-validator';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const UserSchema = new mongoose.Schema(
  {
    name: {
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
      match: [passwordRegex, 'Invalid password format'],
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
