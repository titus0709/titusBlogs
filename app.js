const express = require('express');
const mongoose =require('mongoose');
const blogRoutes = require('./routes/blogRoutes')


// express app
const app = express();


const morgan = require('morgan');


//connecting to db
const dbURI= "mongodb+srv://titus07:titus0707@cluster0.gq8kyi1.mongodb.net/"
mongoose.connect(dbURI)
.then(result=>{app.listen(3000)})
.catch(err=>{console.log(err)});

// listen for requests



// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');


//middlewares

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
 app.use(morgan('dev'));

//creating blog
// app.get('/add-blog',(req,res)=>{
//   const blog = new Blog({
//    title:'new Blog',
//    snippet:'about the new blog',
//    body:'this is the body of new blog'
//   })
//   blog.save()
//   .then((result)=>{
//  res.send(result)
//   })
//   .catch((err)=>console.log(err))
//  }
 
//  );

 //post request

 
 
 

app.use((req,res,next)=>{
  console.log('Request is made')
  console.log('host name:',req.hostname)
  console.log('path :',req.path)
  console.log('method:',req.method)
  next();
})

app.use((req,res,next)=>{
  console.log('in the next middle ware')
  
  next();
}) 

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/', (req, res) => {
  res.redirect('/blogs')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
  
});

//creating blogs
app.use(blogRoutes);


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});



// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});