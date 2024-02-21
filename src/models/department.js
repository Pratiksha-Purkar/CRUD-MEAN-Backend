const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  departmentName: { type: String, required: true },
  designation: [{ type: String }],
});

module.exports = mongoose.model('Department', departmentSchema);
