var name = {
  firstName: "Huy",
  lastName: "Hoang",
  welcome: () => console.log(`Hi, ${this.firstName} ${this.lastName}`),
};

// name.welcome();

Person = (firstName, lastName) => {
  return (this.firstName = firstName), (this.lastName = lastName);
};

Person.prototype.fullName = () => {
  return console.log(`Hi, ${this.firstName} ${this.lastName}`);
};

var personName = new Person("Huy", "Hoang");
personName.fullName();
