import pkg from 'mongoose';
const { Schema, model } = pkg;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Company = model('Company', CompanySchema, 'Companies');
export default Company;
