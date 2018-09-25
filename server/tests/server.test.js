const {expect} = require('expect');
const {} = require('');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
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
