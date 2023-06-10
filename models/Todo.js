const mongoose = require('mongoose');

const Todo  = new mongoose.Schema({
  title:
    { type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
       },

    {timestamps: true});

    //Compile.

module.exports = mongoose.model("Todo", Todo);
