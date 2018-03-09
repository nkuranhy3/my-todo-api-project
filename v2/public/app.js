/* global $ */

$(document).ready(function () {

  $.getJSON("/api/todos")
    .then(addTodos)
    .catch(function (err) {
      console.log(err);
    });




});

function addTodos(todos) {

  todos.forEach(function (todo) {

    var newTodo = $('<li class="task">' + todo.name + '</li>');

    /*appending to li on index page */

    $('.list').append(newTodo);
  });
}