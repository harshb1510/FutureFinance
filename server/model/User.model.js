import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    referenceNumber: String,
    type: String,
    accountNumber: String,
    amount: Number,
    date: String,
    paymentIntent: {
      type: String, // You might adjust the type based on the data structure provided by the payment gateway
      default: null, // Set a default value if needed
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
  },

  transactions: [TransactionSchema], // Use the TransactionSchema for transactions

  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
  balance: { type: Number },
  pin: { type: String },
});

export default mongoose.model.Users || mongoose.model("User", UserSchema);
