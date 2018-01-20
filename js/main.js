console.log("welcome to home");
$.ajax({
  type:"GET",
  url:"https://api.myjson.com/bins/tls49",
  dataType:"json",
  success:function(response){
  //  console.log("Data from server",response);
  var data=formObject(response);
  constructDOM(data);
  },
  error:function(err){
    console.log("Error in get method",err);
  },
});
function formObject(response){
  var flags=[],categoryObject=[];
  var length=response.length;
    for(var i=0;i<length;i++){
      var movie=response[i];
      //console.log("movie",movie);
      //var language=movie.language;
    var index=flags.indexOf(movie.language);
    if(index>=0){
      categoryObject[index].movies.push(movie);
      continue;
    }
else{
        flags.push(movie.language);
      }

var objschema={
  "category":movie.language,
  "movies":[]
}
objschema.movies.push(movie);
//console.log("objschema",objschema);
categoryObject.push(objschema);
console.log("categoryObject",categoryObject);

}
console.log(flags);
return categoryObject;

 //console.log(obj);
}
function constructDOM(data){
  var categoryContent=[];
  for(var i=0;i<data.length;i++){
    var objschema=data[i];
    console.log("constructDOM",objschema);
    var categorytitle=$('<h3 class="categoryName">'+objschema.category+'</h3>');
categoryContent.push(categorytitle);
  }
    $('section.content').html(categoryContent);

}
