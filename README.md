[![Build Status](https://scrutinizer-ci.com/g/klingzell92/mongodb-crud-phkl16/badges/build.png?b=master)](https://scrutinizer-ci.com/g/klingzell92/mongodb-crud-phkl16/build-status/master)
[![Code Coverage](https://scrutinizer-ci.com/g/klingzell92/mongodb-crud-phkl16/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/klingzell92/mongodb-crud-phkl16/?branch=master)

mongodb-crud-phkl16
====================
Module that connects to MongoDB and handles CRUD operations

Getting started
--------------
To install mongodb-crud-phkl16 simply run this in your command prompt.
```shell
npm install mongodb-crud-phkl16
```

To import mongodb-crud-phkl16 in your code use require like so.
```javascript
const mongocrud = require('mongodb-crud-phkl16')('mongodb://localhost:27017/collection', 'collection');
```
Where the first parameter is the dsn and the other parameter the collection to use.

Example
-------------
```javascript
// Get all documents from the collection
let result = mongocrud.getAll();

// Add a document to the collection
let movie = {
    director: 'Director',
    title: 'Title',
    release: 2017
};

mongocrud.create(movie);

// Get a document from the collection
let result = mongocrud.find(id);

// Update a document from the collection
let movie = {
    director: 'Director2',
    title: 'Title',
    release: 2017
};

mongocrud.update(id, movie);

// Delete a document from the collection
mongocrud.delete(id);

// Delete everything in the collection
mongocrud.delteAll();
```
