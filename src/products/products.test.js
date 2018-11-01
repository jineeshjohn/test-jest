// Products.test.js
import axios from 'axios';
import Products from './products';

jest.mock('axios');

test('should fetch Products', () => {
  const resp = {data: [{name: 'Bob'}]};
  console.log('LLLL', axios);
  axios.get.mockResolvedValue(resp);
 //  axios.jj = jest.fn();

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Products.all().then(Products => expect(Products).toEqual(resp.data));
});