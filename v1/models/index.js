/* setting up the database storage */
var mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todo_v1");

mongoose.Promise = Promise;

module.exports.Todo = require("./todos");