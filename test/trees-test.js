const request = require('supertest');
const app = require('../app');

const Tree = require('../routes/trees');
const { assert } = require('chai');

describe('trees', () => {

    it('returns the correct content', async () => {
        const response = await request(app)
            .get('/trees')
            .set('Accept', 'application/json')
            .send();
        const trees = response.body;

        assert.isArray(trees);

    });

    it('returns the correct tree after post a new tree', async () => {
        const newTree = {
            name: 'this is a new tree',
        }

        const response = await request(app)
            .post('/trees')
            .set('Accept', 'application/json')
            .send(newTree);
        const resultTree = response.body;

        assert.strictEqual(resultTree.name, newTree.name);

    })
});

