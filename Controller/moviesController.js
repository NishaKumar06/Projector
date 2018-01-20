var movies=require('./moviedata');
exports.getAllmovies=function(req,res){
  return res.json(movies);
}
