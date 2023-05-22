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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
    ],
    purchaseDate: {
      type: Date,
      default: Date.now,
    },
    paymentMethod: {
      type: String,
      require: true,
      maxLength: 200,
    },
    deliveryStatus: {
      type: [
        {
          type: String,
          enum: ['pendiente', 'enviado', 'recibido', 'rechazado'],
        },
      ],
    },
  },
  { timestamps: true },
);
export default mongoose.model('Purchase', PurchaseSchema);
