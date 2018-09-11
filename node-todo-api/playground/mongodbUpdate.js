const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server ", err);
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    db.collection("Todos").findOneAndUpdate(
      {
        _id: new ObjectID("5b3990befc29bf03acc3547b"),
      },
      {
        $set: {
          completed: true,
        },
      },
      {
        returnOriginal: false,
      },
    );

    client.close();
  },
);
