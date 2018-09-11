const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server ", err);
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    db.collection("Todos").deleteMany({ text: "Eat dinner" });

    db.collection("Todos").deleteOne({ text: "Eat lunch" });

    db.collection("Todos").findOneAndDelete({ text: "Eat breakfast" });

    client.close();
  },
);
