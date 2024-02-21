const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  employeeName: { type: String, required: true },
  address: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  designation: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  bloodGroup: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
