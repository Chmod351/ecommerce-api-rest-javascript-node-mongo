import mongoose from 'mongoose';

const PurchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cart',
      required: true,
    },
    amount: { type: Number, required: true },
    shippingAddress: {
      type: Object,
      required: true,
      maxLength: 500,
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
