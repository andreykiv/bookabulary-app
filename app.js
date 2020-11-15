// express app
const express = require('express');
const app = express();
require('./db/mongoose')

const bookRouter = require('./routers/book')
// const Book = require("./models/book")

// listen for requests
const port = process.env.PORT || 3000;

const books = [
    {
      "_id": "5fb05330fa36c04c3003e696",
      "title": "The Way of Kings",
      "author": "Brandon Sanderson",
      "bookCover": "https://images-na.ssl-images-amazon.com/images/I/91KzZWpgmyL.jpg",
      "year": 2010,
      "__v": 0
    },
    {
      "_id": "5fb0538cfa36c04c3003e697",
      "title": "Foundation and Earth",
      "author": "Isaac Asimov",
      "bookCover": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0081/9780008117535.jpg",
      "year": 1986,
      "__v": 0
    },
    {
      "_id": "5fb053befa36c04c3003e698",
      "title": "Dune",
      "author": "Frank Herbert",
      "bookCover": "https://images-na.ssl-images-amazon.com/images/I/A1u+2fY5yTL.jpg",
      "year": 1965,
      "__v": 0
    },
    {
      "_id": "5fb11c2b1c0cb52f68b485d6",
      "title": "Atlas Shrugged",
      "author": "Ayn Rand",
      "bookCover": "https://images-na.ssl-images-amazon.com/images/I/81-N8W4ZgUL.jpg",
      "year": 1957,
      "__v": 0
    },
    {
      "_id": "5fb11d5c71d16159149afb37",
      "title": "The Gambler",
      "author": "Fyodor Dostoevsky",
      "bookCover": "https://images-na.ssl-images-amazon.com/images/I/410wG5Qj4nL._SX346_BO1,204,203,200_.jpg",
      "year": 1866,
      "__v": 0
    },
    {
      "_id": "5fb11e3871d16159149afb38",
      "title": "The Buried Giant",
      "author": "Kazuo Ishiguro",
      "bookCover": "https://images-na.ssl-images-amazon.com/images/I/51KyFWGFleL._SX341_BO1,204,203,200_.jpg",
      "year": 2015,
      "__v": 0
    }
  ]

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
    res.render('index', {title: 'Home', books})
})


app.get("/books", (req, res) => {
    res.render('books', {title: "Books", books})
})

app.get("/newbook", (req, res) => {
    res.render('newbook', {title: "New Book"})
})


app.get("/sign-in", (req,res) =>{
    res.render('sign-in', {title: "Sign In"})
})

app.use(express.json())
app.use('/api', bookRouter)

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });
  