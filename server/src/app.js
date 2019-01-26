const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var Post = require("../models/post");

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose');
mongoose.connect('mongodb://seb123:seb123@ds161724.mlab.com:61724/mongoose');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection succeedededed");
});



//new posts
app.post('/posts', (req, res) => {
  var db = req.db
  var title = req.body.title
  var description = req.body.description
  var new_post = new Post({
    title: title,
    description: description
  })
  new_post.save(function(error) {
    if (error){
      console.log(error);
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

//gett current Posts
app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function(error, posts) {
    if (error) {console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

//get and update posts
app.get('/post/:id', (req, res) => {
  var db = req.db
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) {console.error(error);}
    res.send(post)
  })
})
//update
app.put('/posts/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) { console.error(error); }

    post.title = req.body.title
    post.description = req.body.description
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete a post
app.delete('/posts/:id', (req, res) => {
  var db = req.db;
  Post.remove({
    _id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

app.listen(process.env.PORT || 8081)
