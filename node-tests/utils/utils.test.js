const expect = require("expect");
const utils = require("./utils");

describe("Utils", () => {
  it("Should add two numbers", () => {
    var res = utils.add(20, 10);

    expect(res)
      .toBe(30)
      .toBeA("number");
    //   if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}`);
    //   }
  });

  it("Should async add numbers", done => {
    utils.asyncAdd(3, 4, sum => {
      expect(sum)
        .toBe(7)
        .toBeA("number");
      done();
    });
  });

  it("Should async square numbers", done => {
    utils.asyncSquare(5, res => {
      expect(res)
        .toBe(25)
        .toBeA("number");
      done();
    });
  });
});

it("Should set first name and last name", () => {
  var user = { location: "Hanoi", age: 21 };
  var res = utils.setName(user, "Huy Hoang");

  expect(res).toInclude({
    firstName: "Huy",
    lastName: "Hoang",
  });
});
