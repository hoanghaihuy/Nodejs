// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Hey. It worked!"), 2000);
// });

// somePromise.then(message => console.log("Success: ", message));

var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers");
      }
    }, 1000);
  });
};

asyncAdd(10, 20).then(
  res => console.log("Result: ", res),
  err => console.log(err),
);
