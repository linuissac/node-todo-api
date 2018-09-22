//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');   //destructruring the above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
if(err){
  return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

/* fetching data from db */

// db.collection('Todos').find({
//   _id:new ObjectID('5ba4e3d569a1582c2806dc5f')   // this new ObjectID constructor is used to pass the id as string
// }).toArray().then((docs) =>{
// console.log('Todos');
// console.log(JSON.stringify(docs, undefined, 2));
// },(err)=>{
//   console.log('Unable to fetch data');
// });

  /* using a diff method other than toArray() */

// db.collection('Todos').find().count().then((count) =>{
// console.log(`Count of Todos: ${count}`);
// },(err)=>{
//   console.log('Unable to fetch data');
// });

/* Here I'm fetching the data with name =Linu from users table */

db.collection('Users').find({name:'Linu'}).toArray().then((docs) =>{
console.log(JSON.stringify(docs, undefined, 2))
},(err)=>{
  console.log('Unable to fetch data');
});

// db.close();
});
