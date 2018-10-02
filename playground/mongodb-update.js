const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err){
    return console.log('Unable to coonect to Mongodb server');
  }
  console.log('Connected to Mongodb Server.');
  const db = client.db('TodoApp');

  //deleteMany
  db.collection('Todos').findOneAndUpdate({_id : new ObjectID("5bb2f71bbb984cb968e90379")},
{
    $set: {
      completed: true
    }
},{
  returnOriginal: false
}).then((result) => {
    console.log(result);
  });

  client.close();
});
