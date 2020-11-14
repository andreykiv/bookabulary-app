const express = require('express');

// express app
const app = express();

// listen for requests
const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Server listening to port ${port}`)
});

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.get("/", (req, res) => {
    res.render('index', {title: 'Home'})
})


app.get("/books", (req, res) => {
    res.render('books', {title: "Books"})
})


// app.get("/songs/create", (req,res) =>{
//     res.render('create', {title: "New"})
// })

// app.use(express.json())
// app.use('/api', songRouter)

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });
  