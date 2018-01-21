console.log("welcome to home");
$.ajax({
  type:"GET",
//  url:"https://api.myjson.com/bins/tls49",
url:"/movies/all"
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
  var flags=[],categoryObject=[],name=[],name_array=[];
  var length=response.length;
    for(var i=0;i<length;i++){
      var movie=response[i];
      //console.log("movie",movie);
      //var language=movie.language;
    var index=flags.indexOf(movie.language);
    var j=name_array.indexOf(movie.name);
    if(index>=0 && j>=0){
      categoryObject[index].movies.push(movie);
      //cat_name[j].movies.push(movie);

      continue;
    }
else{
        flags.push(movie.language);
        name_array.push(movie.name);
      }

var objschema={
  "category":movie.language,
  "nam":movie.name,
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
  var categoryContent=[],cnames=[];
  for(var i=0;i<data.length;i++){
    var objschema=data[i];
    console.log("constructDOM",objschema);
    var categorytitle=$('<h3 class="categoryName">'+objschema.category+'</h3>');
    var catname=$('<h4 class="name">'+objschema.nam+'</h4>');
categoryContent.push(categorytitle);
cnames.push(catname);
  }
    $('section.content').html(categoryContent);
    $('div.name').html(cnames);

}
