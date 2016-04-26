var express = require('express'); //gives reference to express (no ability to do anything)

var app = express(); //creates instance of express so that now we can do something with express

var port = process.env.PORT || 5000;

var bookRouter = express.Router();

// app.use() allows us to setup some middleware
// whatever is put in here is going to be used by express first before doing anything else
// express.static(in here we setup a static directory by giving name)
// anytime a request is made to css/styles.css, the first thing express does is look into the public directory and see if there is a static file in there and serves it
// route same as that of static file after that static file wont do anything 
app.use(express.static('public'));

// html are also a type of static files(just need to serve this file)
// app.use(express.static('src/views'));
app.set('views','./src/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            link: '/Books', Title: 'Books'
        }, {
            link: '/Authors', Title: 'Authors'
        }]
    });
});

// function() is passed to express that tells it what to do
// request is info coming from the browser
// response is what we gonna deal with
// express is taking request and giving back response
// firstly public directory is looked into then src/view and then routing
// app.get('/', function(request, response) {
//     response.send('Hello Avinash');
// });  // slash('/') here represents home route (here localhost:5000)

// app.get('/Books', function(req, res) {
//     res.send('Hello Books');
// });

// app.get('/Authors', function(req, res) {
//     res.send('Hello Authors');
// });

var books = [
    {
        title: '3 idiots',
        author: 'baba ranchod das'
    },
    {
        title: 'hangover',
        author: 'bradley cooper'
    },
    {
        title: 'transporter',
        author: 'jason straton'
    },
    {
        title: 'batman',
        author: 'cristopher nolan'
    }
];

bookRouter.route('/')
    .get(function(req, res) {
        res.render('books', {
        title: 'Books',
        nav: [{
            link: '/Books', Title: 'Books'
        }, {
            link: '/Authors', Title: 'Authors'
        }],
        Books: books
    });
    });

bookRouter.route('/single')
    .get(function(req, res) {
        res.send('Hello Single Book');
    });

app.use('/Books', bookRouter);

app.listen(port, function(err) {
    console.log('Running on port' + port);
});