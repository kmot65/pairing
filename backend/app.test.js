const server = require('./app');
const request = require('supertest');

// close the server after each test
afterEach(() => {
  server.close();
});

// TODO: add proper test

describe('/medals endpoint', () => {
  it('should respond as expected', async () => {
    const response = await request(server).get('/medals');
    expect(1).toBe(2); // fail on purpose while stubbed out
  });
});
