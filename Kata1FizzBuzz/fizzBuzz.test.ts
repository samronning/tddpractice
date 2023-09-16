import fizzBuzz from "./fizzBuzz";

test("initial test", () => {});

test("fizzBuzz accepts a number and returns a string", () => {
  const typeOfReturn = typeof fizzBuzz(0);
  expect(typeOfReturn).toBe("string");
});

test("fizzBuzz returns the number that is input cast to a string", () => {
  const string2 = fizzBuzz(2);
  expect(string2).toStrictEqual("2");
  const string116 = fizzBuzz(116);
  expect(string116).toStrictEqual("116");
});

test("multiples of 3 and not 5 return \"Fizz\" instead of a number", () => {
    const chose9 = fizzBuzz(9);
    expect(chose9).toEqual("Fizz");
    const chose12 = fizzBuzz(12);
    expect(chose12).toEqual("Fizz");
})

test("multiples of 5 and not 3 return \"Buzz\" instead of a number", () => {
    const chose5 = fizzBuzz(5);
    expect(chose5).toEqual("Buzz");
    const chose15 = fizzBuzz(20);
    expect(chose15).toEqual("Buzz");
})

test("multiples of 5 and 3 return \"FizzBuzz\" instead of a number", () => {
    const chose15 = fizzBuzz(15);
    expect(chose15).toEqual("FizzBuzz");
    const chose150 = fizzBuzz(150);
    expect(chose150).toEqual("FizzBuzz");
})
