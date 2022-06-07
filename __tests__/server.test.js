
'use strict';
const { app } = require('../src/server');

const supertest = require('supertest');
const mockRequest = supertest(app);
const { db } = require('../src/models/index');

beforeAll(async () => {
    await db.sync();
});


describe('Web server', () => {
    // Check if 404 is handled 

    it('Should respond with 404 status on an invalid route', async () => {
        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);
    });


    it('can add a food', async () => {
        const response = await mockRequest.post('/food').send({
            MealName: 'mansaf',
            Ingredients: 'jameed karaki'
        });
        expect(response.status).toBe(201);
    });

    it('bad method', async () => {
        const response = await mockRequest.post('/food/:id').send({
            MealName: 'mansaf',
            Ingredients: 'jameed karaki'
        });
        expect(response.status).toBe(404);
    });
    

    it('can get all food', async () => {
        const response = await mockRequest.get('/food');
        expect(response.status).toBe(200);

    });

    // test if can update a food
    it('can update a record', async () => {
        const response = await mockRequest.put('/food/1');
        expect(response.status).toBe(201);
    });

    // test if can delete a food
    it('can delete a record', async () => {
        const response = await mockRequest.delete('/food/1');
        expect(response.status).toBe(204);
    });

});


afterAll(async () => {
    await db.drop();
});