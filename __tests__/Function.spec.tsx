import '@testing-library/jest-dom';

describe('Functional testing to verify that tests are configured', () => {

  test('It must be true', () => {
    console.log(process.env.VITE_IN_VALIDATION);
    expect(true).toBeTruthy();
  });

  test('It must be false', () => {
    expect(false).toBeFalsy();
  });
});
