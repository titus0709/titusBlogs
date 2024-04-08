const express =require('express');
const blogControler= require('../controlers/blogController')

const router = express.Router();


    router.get('/blogs', blogControler.blog_index)

    router.get('/blogs/:id', blogControler.blog_details);
      
    router.delete('/blogs/:id', blogControler.blog_delete);

    router.post('/blogs', blogControler.blog_create_get);


  module.exports = router;