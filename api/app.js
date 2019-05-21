var express = require('express');
var cors = require('cors');

var app = express();

var todo = require('./routes/todo'); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/todos', todo);

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://MyMongoDBUser:1234@cluster0-odxwb.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

var port = 5000;
app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
});