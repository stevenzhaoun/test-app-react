export const addTwoNumbers = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return num1 + Number(num2);
}