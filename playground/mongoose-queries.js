const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id ='5baa33a305dd7cf4433d5074';

Todo.find({
  _id:id
}).then((todos) =>{
console.log('Todos', todos)
});
Todo.findOne({
_id: id
}).then((todo) =>{
  console.log('Todo', todo);
});
Todo.findById(id).then((todo) =>{
  console.log('Todo By Id', todo);
});
