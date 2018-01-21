var MongoClient=require('mongodb').MongoClient;

exports.createConnection=function(){
  MongoClient.connect("mongodb://Nisha:root@ds047325.mlab.com:47325/projector_nisha").then(function(client){
    console.log("connected to mongodb...");
    exports.database=client.db('projector_nisha');
    console.log("connected to database...");

  });
}
