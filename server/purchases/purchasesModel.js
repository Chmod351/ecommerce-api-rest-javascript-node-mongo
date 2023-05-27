import mongoose from 'mongoose';

const PurchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      require: true,
      maxLength: 200,
      minlength: 5,
    },
    shippingAddress: {
      type: String,
      required: true,
      maxLength: 100,
      minlength: 50,
    },
    shippingStatus: {
      type: [
        {
          type: String,
          enum: ['pendiente', 'enviado', 'recibido', 'rechazado'],
        },
      ],
      default: 'pendiente',
    },
  },
  { timestamps: true },
);
export default mongoose.model('Purchase', PurchaseSchema);
