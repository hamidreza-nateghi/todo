var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    text: {type: String},
    completed: {type: Boolean},
    userId: {type: String}
});


module.exports = mongoose.model('Todo', todoSchema);