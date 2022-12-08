const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  amount_borrowed: {
    type: Number,
    required: true,
  },
  amount_paid: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["cleared", "owed"],
    default: "cleared",
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
});

module.exports = mongoose.model("Loan", LoanSchema);
