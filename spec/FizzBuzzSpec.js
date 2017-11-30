describe("FizzBuzz ", function() {

  it("should return FizzBuzz when input is 15", function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });

  it("should return Fizz when input is 3", function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it("should return Buzz when input is 5", function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });

  it("should return 56 when input is 56", function() {
    expect(fizzBuzz(56)).toEqual(56);
  });

  it("should return 1 when input is 1", function() {
    expect(fizzBuzz(1)).toEqual(1);
  });

  it("should return 100 when input is 100", function() {
    expect(fizzBuzz(100)).toEqual('Buzz');
  });

  it("should return Not A Number when input is null", function() {
    expect(fizzBuzz(null)).toEqual('Not-A-Number');
  });

  it("should return Not A Number when input is undefined", function() {
    expect(fizzBuzz(undefined)).toEqual('Not-A-Number');
  });

  it("should return Not A Number when input is boolean", function() {
    expect(fizzBuzz(true)).toEqual('Not-A-Number');
  });

  it("should return Not A Number when input is non-primitive type", function() {
    expect(fizzBuzz([])).toEqual('Not-A-Number');
  });

  it("should still work when input is negative number", function() {
    expect(fizzBuzz(-20)).toEqual('Buzz');
  });
});
