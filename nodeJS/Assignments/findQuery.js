const MongoClient = require("mongodb").MongoClient;

async function mongo() {
  let mongoClient;
  const url = "mongodb://localhost:27017";

  try {
    mongoClient = new MongoClient(url);
    await mongoClient.connect();
    console.log("Connected to DB....!");
    data = await mongoClient
      .db("company")
      .collection("employee")
      .find({})
      .toArray();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

mongo();

//  Connected to DB....!
// [
//     {
//       _id: new ObjectId("63722bbb16a5301c2de48a8e"),
//       ename: 'vipul',
//       eage: 22,
//       esalary: 10000,
//       dep: 'HR'
//     },
//     {
//       _id: new ObjectId("63722bbb16a5301c2de48a8f"),
//       ename: 'ravi',
//       eage: 23,
//       esalary: 73733,
//       dep: 'IT'
//     },
//     {
//       _id: new ObjectId("63722bbb16a5301c2de48a90"),
//       ename: 'mithilesh',
//       eage: 25,
//       esalary: 43342,
//       dep: 'IT'
//     },
//     {
//       _id: new ObjectId("63722bbb16a5301c2de48a91"),
//       ename: 'abhishek',
//       eage: 32,
//       esalary: 88379,
//       dep: 'Finance'
//     }
//   ]
