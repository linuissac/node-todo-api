const expect = require('expect');
const  request = require('supertest');
const{ObjectID} = require('mongodb')

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos=[{
  _id: new ObjectID(),
  text: 'First test todo'
},{
  _id: new ObjectID(),
  text: 'Second test todo'
}];
beforeEach((done) =>{
  Tdo.remove({}).then(() =>done());
});
describe('POST /todos' , () =>{
it('should create a new todod', (done) =>{
var text: "Bighero"

request(app)
  .post('/todos')
  .send({text})
  .expect(200)
  .expect((res) =>{
    expect(res.body.text).toBe(text);
  })
  .end((err, res) =>{
    f(err){
      return done(err);
    }
    Todo.find().then((todos) =>{
      expect(todos.length).toBe(1);
      done();
    }).catch((e) =>done(e));
  });
});
});

describe('GET /todos', () =>{
  it('should get all todos', (done)=>{
    request(app)
     .get('/todos')
     .expect(200)
     .expect((res) =>{
       expect(res.body.todos.length).toBe(2);
     })
     .end(done);
  })
})


describe('GET /todos/:id', () =>{
  it('should return todo doc', (done) =>{
    request(app)
    .get(`/todos/${todos[0]._id.toHexString()}`)
    .expect(200);
  });
});
