import pkg from 'mongoose';
const { Schema, model } = pkg;

const AdSchema = new Schema({
  companyId: {
    type: Number,
    required: true,
  },
  primaryText: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  CTA: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Ad = model('Ad', AdSchema, 'Ads');
export default Ad;
