const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 25,
  },
  description: {
    type: String,
    minlength: 3,
    maxlength: 100,
  },
  dueDate: {
    type: Date,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  important: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
