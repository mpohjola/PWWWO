var Author = require('../models/author');

exports.author_list = (req, res, next) => {
    Author.find()
    .sort([['family_name', 'ascending']]) //sorts authors by surname
    .exec((err, list_authors) => {
      if (err) { return next(err); }
      //Successful, so render
      res.render('author_list', { title: 'Author List', author_list: list_authors });
    });
};

exports.author_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

exports.author_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author create GET');
};

exports.author_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Author create POST');
};

exports.author_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

exports.author_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

exports.author_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author update GET');
};

exports.author_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Author update POST');
};