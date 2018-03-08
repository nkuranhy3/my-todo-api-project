/* setting up the database storage */
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todo_v1");

mongoose.Promise = Promise;

module.exports.Todo = require("./todos");