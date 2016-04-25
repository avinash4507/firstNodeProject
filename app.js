var express = require('express'); //gives reference to express (no ability to do anything)

var app = express(); //creates instance of express so that now we can do something with express

var port = 5000;

// app.use() allows us to setup some middleware
// whatever is put in here is going to be used by express first before doing anything else
// express.static(in here we setup a static directory by giving name)
// anytime a request is made to css/styles.css, the first thing express does is look into the public directory and see if there is a static file in there and serves it
// route same as that of static file after that static file wont do anything 
app.use(express.static('public'));

// html are also a type of static files(just need to serve this file)
app.use(express.static('src/views'));

// function() is passed to express that tells it what to do
// request is info coming from the browser
// response is what we gonna deal with
// express is taking request and giving back response
// firstly public directory is looked into then src/view and then routing
app.get('/', function(request, response){
    response.send('Hello Avinash')
})  // slash('/') here represents home route (here localhost:5000)

app.get('/books', function(req, res) {
    res.send('Hello Books')
})

app.listen(port, function(err) {
    console.log('Running on port '+port);
});