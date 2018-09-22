//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');   //destructruring the above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
if(err){
  return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

 /* Deleting multiple records */

// db.collection('Users').deleteMany({name: 'Linu'}).then((result) =>{
// console.log(result);
// });

/* Deleting single record*/

// db.collection('Users').deleteOne({name: 'Kuttu'}).then((result) =>{
//   console.log(result);
// })

/*  find one record and delete*/

db.collection('Users').findOneAndDelete({_id: new ObjectID('5ba4e6d0a5f07c24840e5542')}).then((docs) =>{
  console.log(JSON.stringify(docs, undefined, 2));
})
// db.close();
});
