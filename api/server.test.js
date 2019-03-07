const request = require('supertest');

const server = require('./server')

describe('server.js', () => {
  it('should set testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  })


  describe('GET', () => {
    it('should return 200 OK', async () => {
      const res = await request(server).get('/');

      expect(res.status).toBe(200);
    })

    it('should return JSON', async () => {
      const res = await request(server).get('/');
      
      expect(res.type).toBe('application/json');

    })


  })


  describe('POST', () => {

    it('should return 200 OK', async () => {
      const res = await request(server).post('/');
      expect(res.status).toBe(200);

    })

    it('should return JSON', async () => {
      const res = await request(server).post('/');

      expect(res.type).toBe('application/json');

    })


  })


  describe('PUT', () => {

    it('should return 200 OK', async () => {
      const res = await request(server).put('/');
      expect(res.status).toBe(200);

    })


  })


  describe('DELETE', () => {
    it('should return 200 OK', async () => {
      const res = await request(server).delete('/');
      expect(res.status).toBe(200);

    })

    it('should return JSON', async () => {
      const res = await request(server).delete('/');

      expect(res.type).toBe('application/json');

    })


  })



})