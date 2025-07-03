import { MongoClient } from "mongodb";

const URI = "mongodb+srv://eusantosdev:Santos%402005@cluster1.vqf7ksi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

interface User {
  name: string;
  email: string;
  age: number;
  job: string
}

const client = new MongoClient(URI);

async function main() {
  try {
    const myDB = client.db("ecommerce_api");
    const myColl = myDB.collection("users");
    const user = {
          name: 'Josué José de Jesus',
          email: 'eusoujosue@gmail.com',
          age: 19,
          job: 'Militar'
    } as User;
    const result = await myColl.insertOne(user);
    console.log(`Documento inserido na coleção user com o _id: ${result.insertedId}`);
  } catch (error) {
    console.log(`Erro no servidor, erro: ${error}`);
  }
}

export { main };