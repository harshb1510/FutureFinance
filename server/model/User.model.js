import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['credited', 'withdrawal', 'transfer','deposit'],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide unique Username"],
    unique: [true, "Username Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide a unique email"],
    unique: true,
  },
  accountNumber: {
    type: Number,
    required: [true, "Please provide a unique account number"],
    unique: true,
  },
  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
  balance: { type: Number },
  pin: { type: String },
  transactions: [TransactionSchema], // Array to store transaction history
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);