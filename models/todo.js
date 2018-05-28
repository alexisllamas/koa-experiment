const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema(
  {
    description: { type: String },
    done: { type: Boolean },
  },
  { timestamps: true },
)

mongoose.model('Todo', TodoSchema)

module.exports = mongoose.model('Todo')
