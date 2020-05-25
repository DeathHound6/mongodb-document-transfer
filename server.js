const mongo = require("mongodb").MongoClient;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const cs1 = process.env.mongo_conn1; // transfer FROM this cluster
const cs2 = process.env.mongo_conn2; // transfer TO this cluster

if (!cs1 || !cs2) {
  console.log("One of the connection strings has not been provided");
  process.exit();
}

try {
  mongo.connect(cs1, options, async (err, conn1) => {
    if (err) return console.error(err);
    mongo.connect(cs2, options, async (err, conn2) => {
      const coll1 = conn1.db("").collection(""); // change both strings for your own needs
      const coll2 = conn1.db("").collection(""); // change both strings for your own needs

      const docs1 = await coll1.find({}).toArray();
      const docs2 = await coll2.find({}).toArray();
      const docs = [];
      docs1.forEach(e => {
        if (!docs2.includes(e)) docs.push(e); // ensures it only adds documents that aren't already in it
      });
      setTimeout(() => {
        coll2.insertMany(docs);
      }, 5000);

      console.log("Documents have been successfully transferred");
    });
  });
} catch (err) {
  console.error(err);
  process.exit();
}
