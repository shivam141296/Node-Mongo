const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err){
    return console.log('Unable to coonect to Mongodb server');
  }
  console.log('Connected to Mongodb Server.');
  const db = client.db('TodoApp');
  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
  client.close();
});
