const request = require('supertest');
const { expect } = require('chai');
const PORT = process.env.PORT
const myRequest = request(`http://localhost:${PORT}/api/users`);


describe('auths endpoints test', () => {

const newUser = {
  email: `email1235@gmail.com`,
  password: '123456897',
  username: `1235`
};
  it('it should return created user POST (/signup) ', async () => {
    const response = await myRequest.post('/api/signup').send(newUser);
    expect(response.statusCode).to.be.equal(200);
  });
  it('it should return an error (/signup) ', async () => {
    const testUser = {
      email: '',
      username: '',
      password: '',
    };
    const response = await myRequest.post('/signup').send(testUser);
    expect(response.statusCode).to.be.equal(500);
  });
  it('return AN ERROR login (POST /signin)', async function () {
    const dataUser = {
      email: 'test5@hotmail',
      username: 'Test5',
      password: 'usertest2',
    };
    const response = await myRequest.post('/signin').send(dataUser);
    expect(response.statusCode).to.be.equal(404);
  });
  it('return status code 200 (POST /signin)', async function () {
    const dataUser = {
      username: 'weqwe',
      email: 'k@gmail.com',
      password:
        '@ztCU^d3Q9%JXkN!toR&fVniRupNySHo3w^6tP*VfG9vuoH9u#zod42JC6Y6Poq',
    };
    const response = await myRequest.post('/signin').send(dataUser);
    expect(response.statusCode).to.be.equal(200);
  });
});

describe('User getUser', () => {
  it('should return user data if the user exists', async () => {
    const userId = '6472806d96e540e6d145c593';
    const res = await myRequest.get(`/${userId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.all.keys(
      '__v',
      '_id',
      'createdAt',
      'email',
      'isAdmin',
      'password',
      'updatedAt',
      'username',
      'wishList',
    );
  });

  it('should return an error if the user does not exist', async () => {
    const res = await myRequest.get(`/6472806d96e540e6d145c522`);
    expect(res.status).to.equal(400);
  }, 10000);
});
