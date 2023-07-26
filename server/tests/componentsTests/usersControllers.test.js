import { expect } from 'chai';
import usersController from '../../application/users/usersControllers';

describe('this tests should return succesfull responses', () => {
  it('should return an user with status code 200', async () => {
    const body = {
      email: '12345@hotmail.com',
      password:
        '@ztCU^d3Q9%JXkN!toR&fVniRupNySHo3w^6tP*VfG9vuoH9u#zod42JC6Y6Poq',
    };
    const response = usersController.signIn(body);
    console.log(response);
  });
});
