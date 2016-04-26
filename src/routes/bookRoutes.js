var express = require('express');

var bookRouter = express.Router();

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
        res.render('booksListView', {
        title: 'Books',
        nav: [{
            link: '/Books', Title: 'Books'
        }, {
            link: '/Authors', Title: 'Authors'
        }],
        Books: books
    });
    });

bookRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        res.render('bookView', {
        title: 'Books',
        nav: [{
            link: '/Books', Title: 'Books'
        }, {
            link: '/Authors', Title: 'Authors'
        }],
        book: books[id]
    });
    });

module.exports = bookRouter;