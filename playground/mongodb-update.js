//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');   //destructruring the above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
if(err){
  return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5ba5be28b2fa9c2e88664ee0'
  )},
{
$set:{
  name:'appu'
},
$inc:{
  age: 30
}
},
{
  returnOriginal:false
}).then((result)=>{
console.log(result);
});
// db.close();
});
