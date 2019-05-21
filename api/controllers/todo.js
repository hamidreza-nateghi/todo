var Todo = require('../models/todo');

exports.test = function (req, res) {
  Todo.find({}).then(function (users) {
    res.send(users);
 });
};

exports.todo_create = function (req, res) {
    var todo = new Todo(
        {
            text: req.body.text,
            completed: req.body.completed,
            userId: req.body.userId
        }
    );

    todo.save(function (err) {
        if (err) console.error(err);
        res.send(todo);
    })
};

exports.todo_read = function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if (err) console.error(err);
        res.send(todo);
    })
};

exports.todo_update = function (req, res) {
    Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function (err, todo) {
        if (err) console.error(err);
        res.send(todo);
    });
};

exports.todo_delete = function (req, res) {
    Todo.findByIdAndRemove(req.params.id, function (err) {
        if (err) console.error(err);
        res.send('Todo deleted.');
    })
};