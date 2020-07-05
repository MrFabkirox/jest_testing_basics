const { functions, functions2, functions3 } = require('./functions');

test('Adds 2 + 2', () => {
  expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 3', () => {
  expect(functions2.add2(2, 3)).toBe(5)
})

test('Adds 2 + 2', () => {
  expect(functions.add(2, 2)).not.toBe(9)
})

test('Should be null', () => {
  expect(functions3.isNull()).toBeNull();
})

test('Return the value', () => {
  expect(functions3.checkValue(7)).toBe(7);
})

test('Return not to be falsy', () => {
  expect(functions3.checkFalsy(null)).toBeFalsy();
})

test('Return a user', () => {
  expect(functions3.createUser()).toEqual({ firstname: "Brad", lastname: "Traversy" });
})

test('to be less than', () => {
  const load1 = 500
  const load2 = 600
  expect(load1 + load2).toBeLessThan(1600);
})

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
})

test('admin is in username', () => {
  usernames = ['brad', 'fab', 'admin'];
  expect(usernames).toContain('admin');
})

test('send user lean graham from promiss', () => {
  expect.assertions(1);
  return functions3.fetchUserPromiss().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  })
})

test('send user lean graham from async', async () => {
  expect.assertions(1);
  const data = await functions3.fetchUserAsync()
  expect(data.name).toEqual('Leanne Graham');
})
