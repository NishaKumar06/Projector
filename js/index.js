
var http=require('http'),
port=8080,
host="127.0.0.1",

var server=http.createServer(function(req, res){
res.writeHead(200,{"Content-Type":"Text/plain"})
);
res.write("hello");
res.end();
});
server.listen(port,host,function()){
  console.log("listening....");
}
