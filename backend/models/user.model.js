const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  employee_name: {type: String,required: true,trim: true,minlength: 3},
  employee_id: { type: String, required: true,unique: true,index: true  },
  employee_manager: { type: String, required: true },
  employee_tech: [{
    technology: { type: String, lowercase: true },
    profValue: { type: String, lowercase: true }
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;