const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  estado: {
    type: String,
    default: "borrador",
  },
  proyecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Proyecto",
  },
  creado: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Task", TaskSchema);
