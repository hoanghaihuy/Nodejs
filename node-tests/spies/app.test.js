const expect = require("expect");
const rewire = require("rewire");

var app = rewire("./app");

describe("App", () => {
  var db = {
    saveUser: expect.createSpy(),
  };
  app.__set__("db", db);

  it("Should call this spy correctly", () => {
    var spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });

  it("Should call saveUser with user object", () => {
    var email = "hoanghuy27297@gmail.com";
    var password = "123123";

    app.handleSignUp(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
