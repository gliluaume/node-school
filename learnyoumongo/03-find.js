'use script';

const minAge = parseInt(process.argv[2], 10);
const url = 'mongodb://localhost:27017/learnyoumongo';
const mongo = require('mongodb').MongoClient;
const test = require('assert');


mongo.connect(url, function(err, db) {
  if(err)
    console.log('error', err);
  else {
    let parrots = db.collection('parrots');
    parrots.find({age: { $gt: minAge} }).toArray(function(err, documents) {
      if(err)
        console.log('error 2', err);
      else
        console.log(documents);
    });
    db.close();
  }
});
