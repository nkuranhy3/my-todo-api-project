/*setting up the schema */
var mongoose = require("mongoose");

var todoShema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name cannot be empty"
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model("Todo", todoShema);

module.exports = Todo;
