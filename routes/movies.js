var express = require('express');
var router = express.Router();
var moviesController=require('../Controller/moviesController');
/* GET users listing. */
router.get('/all',moviesController.getAllmovies)
   .post('/add',moviesController.addNewMovie);
module.exports = router;
