var express = require('express');
var bodyParser = require('body-parser');   //Take the json from the client and convert it into object
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} =require('./models/todo');
var {User} =require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
var todo =new Todo({
  text: req.body.text       //text sending from the user
});

todo.save().then((doc) =>{
res.send(doc);
},(e) =>{
res.status(400).send(e);
});
});
app.get('/todos', (req, res) =>{
  Todo.find().then((todos) =>{
    res.send({todos});  //creating an object todos
  }, (e) =>{
res.status(400).send(e);
});
});

app.get('/todos/:id', (req,res) =>{
var id = req.params.id;

if(!ObjectID.isValid(id)){
  return res.status(404).send();
}


/* Passing id within the url and getting the result within postman  */
Todo.findById(id).then((todo) => {
if(!todo){
  return res.status(404).send();
}
res.send({todo});
}).catch((e) =>{
  res.status(400).send();
});
});

app.listen(3000, () =>{
  console.log('Started on port 3000');
});

module.exports ={app}
