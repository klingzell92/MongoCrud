[![Build Status](https://scrutinizer-ci.com/g/klingzell92/MongoCrud/badges/build.png?b=master)](https://scrutinizer-ci.com/g/klingzell92/MongoCrud/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/klingzell92/ramverk2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/klingzell92/ramverk2/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/klingzell92/MongoCrud/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/klingzell92/MongoCrud/?branch=master)

MongoCrud
====================
Module that connects to MongoDB and handles CRUD operations

Getting started
--------------
To install mongocrud simply run this in your command prompt.
```shell
npm install mongocrud
```
To import mongocrud in your code use require like so.
```javascript
const mongocrud = require('mongocrud')('mongodb://localhost:27017/collection', 'collection');
```
Where the first parameter is the dsn and the other parameter the collection to use.

Example
-------------
```javascript
// Get all documents from the collection
let result = crud.getAll();

// Add a document to the collection
let movie = {
    director: 'Director',
    title: 'Title',
    release: 2017
};

crud.create(movie);

// Get a document from the collection
let result = crud.find(id);

// Update a document from the collection
let movie = {
    director: 'Director2',
    title: 'Title',
    release: 2017
};

crud.update(id, movie);

// Delete a document from the collection
crud.delete(id);

// Delete everything in the collection
crud.delteAll();
```
