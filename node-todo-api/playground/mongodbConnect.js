const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server ", err);
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    // db.collection("Todos").insertOne(
    //   {
    //     text: "Something to do",
    //     completed: false,
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to do insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   },
    // );

    db.collection("Todos").insertOne(
      {
        name: "Hoang Hai Huy",
        age: 21,
        location: "Hanoi",
      },
      (err, result) => {
        if (err) return console.log("Unable to do insert todo", err);
        console.log(JSON.stringify(result.ops));
      },
    );

    client.close();
  },
);
