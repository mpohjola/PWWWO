'use strict';

var util = require('util');
var express = require('express');
var router = express.Router();
var notes = require('../models/notes-memory');

//Add Note
router.get('/add', (req, res, next) => {
    res.render('noteedit', {
        title: 'Add a Note',
        docreate: true,
        notekey: "",
        note: undefined
    });
});

//Save Note
router.post('/save', (req, res, next) => {
    var notePromise;
    if (req.body.docreate === "create") {
        notePromise = notes.create(req.body.notekey, req.body.title, req.body.body);
    } else {
        notePromise = notes.update(req.body.notekey, req.body.title, req.body.body);
    }
    notePromise.then(note => {
        res.redirect('/notes/view?key=' + req.body.notekey);
    })
    .catch(error => {next(error);});
});

//View note
router.get('/view', (req,res, next) => {
    notes.read(req.query.key)
    .then(note => {
        res.render('noteview', {
            title: note ? note.title : "",
            notekey: req.query.key,
            note: note
        });
    })
    .catch(error => {next(error);});
});

module.exports = router;