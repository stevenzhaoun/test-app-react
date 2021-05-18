import { render } from '@testing-library/react';
import { addTwoNumbers } from './add'

//TDD -> TESTing driven development
describe('Test addTwoNumbers', () => {

  test('it should add two numbers properly', () => {
    const result = addTwoNumbers(1, 2);
    expect(result).toBe(3);
  });

  test('should handle non-number input', () => {
    expect(addTwoNumbers(1, 'abc')).toBeNaN();
  })

  // test('testing counter app', () => {
  //   // AAA
  //   // Arrange - Action - Assertion

  //   // Arrange
  //   const component = render(<Counter/>);
  //   const btn = component.getBy('#increaseBtn');
  //   const text = component.queryselector('#text');
  //   expect(text).toBe(0);

  //   // action
  //   btn.click();

  //   // assertion
  //   expect(text).toBe(1);

  // })

  //mocking
  // mock data
  // fixture

  // api call interception
  // simulation data
})