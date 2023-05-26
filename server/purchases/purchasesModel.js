import mongoose from 'mongoose';

const PurchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    productsId: [
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
