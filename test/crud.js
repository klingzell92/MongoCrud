var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var assert = require("assert");

const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/test";
var crud = require('../src/crud.js')(dsn, 'test');

describe('Test crud module', function() {
    it('Test getAll should be empty', async function() {
        await crud.deleteAll();

        const result = await crud.getAll();

        assert.deepEqual(result, []);
    });

    it('Test create and find, should be "test"', async function() {
        var test = {
            test: 'test'
        };

        await crud.create(test);

        const result = await crud.getAll();
        const find = await crud.find(result[0]._id);

        assert.equal(find[0].test, 'test');
    });

    it('Test update and find, should be "test1"', async function() {
        var test = {
            test: 'test1'
        };

        const result = await crud.getAll();
        const find = await crud.find(result[0]._id);

        await crud.update(find[0]._id, test);

        const allUpdated = await crud.getAll();
        const updatedTest = await crud.find(allUpdated[0]._id);

        assert.equal(updatedTest[0].test, 'test1');
    });

    it('Test delete, should be empty array', async function() {
        const result = await crud.getAll();
        const find = await crud.find(result[0]._id);

        await crud.delete(find[0]._id);

        const allUpdated = await crud.getAll();

        assert.deepEqual(allUpdated, []);
    });
});
