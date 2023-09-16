const fizzBuzz = (number: number): string => {
  if (number % 3 === 0) {
    if (number % 5 === 0) {
      return "FizzBuzz";
    }
    return "Fizz"
  }
  if (number % 5 === 0) return "Buzz";
  return number.toString();
};
export default fizzBuzz;
