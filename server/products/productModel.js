import mongoose from 'mongoose';
import mongoose_delete from 'mongoose-delete';

const ProductSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      maxLength: 20,
      required: true,
    },
    description: {
      type: String,
      maxLength: 400,
      required: true,
    },
    stock: {
      type: Number,
    },
    tags: {
      type: [
        {
          type: String,
          enum: ['escuela', 'elegante', 'deportivo', 'casual', 'formal'],
        },
      ],
    },
    comments: [
      {
        comment: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment',
        },
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
    hot: {
      type: Boolean,
      default: false,
    },
    hide: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
ProductSchema.plugin(mongoose_delete, { overrideMethods: true });
export default mongoose.model('Product', ProductSchema);
