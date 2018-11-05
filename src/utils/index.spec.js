const utils = jest.genMockFromModule('./index').default;
utils.isAuthorized = jest.fn(secret => secret === 'not wizard');

test('implementation created by jest.genMockFromModule', () => {
  expect(utils.authorize.mock).toBeTruthy();
  expect(utils.isAuthorized('not wizard')).toEqual(true);
});