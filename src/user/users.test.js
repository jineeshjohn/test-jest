// users.test.js
import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {
  const resp = {data: [{name: 'Bob'}]};
  console.log('LLLL', axios);
  axios.get.mockResolvedValue(resp);
  axios.post =  jest.fn(() => 'default').mockImplementationOnce(() => ({first: 'first call'}));

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(users => expect(users).toEqual(resp.data));
});