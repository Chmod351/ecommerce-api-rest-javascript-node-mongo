const request = require('supertest');
const { expect } = require('chai');
const myRequest = request(`http://localhost:5000/api/users`);

describe('auths endpoints test', () => {
  const newUser = {
    email: `email1235@gmail.com`,
    password: '123456897',
    username: `1235`,
  };
  it('it should return created user POST (/signUp) ', async () => {
    const response = await myRequest.post('/signUp').send(newUser);
    expect(response.statusCode).to.be.equal(200);
  });
  it('it should return an error (/signup) ', async () => {
    const testUser = {
      email: '',
      username: '',
      password: '',
    };
    const response = await myRequest.post('/signUp').send(testUser);
    expect(response.statusCode).to.be.equal(400);
  });
  it('return AN ERROR login (POST /signin)', async function () {
    const dataUser = {
      email: 'test5@hotmail',
      username: 'Test5',
      password: 'usertest2',
    };
    const response = await myRequest.post('/signIn').send(dataUser);
    expect(response.statusCode).to.be.equal(404);
  });
  it('return status code 200 (POST /signin)', async function () {
    const dataUser = {
      username: 'ruby',
      email: 'ruby@gmail.com',
      password: '12345678',
    };
    const response = await myRequest.post('/signIn').send(dataUser);
    expect(response.statusCode).to.be.equal(200);
  });
});

describe('User getUser', () => {
  it('should return user data if the user exists', async () => {
    const userId = '648b5e5e9142749d4d7ebfb7';
    const res = await myRequest.get(`/${userId}`);
    expect(res.status).to.equal(200);
  });

  it('should return an error if the user does not exist', async () => {
    const res = await myRequest.get(`/6472806d96e540e6d145c522`);
    expect(res.status).to.equal(404);
  }, 10000);
});
