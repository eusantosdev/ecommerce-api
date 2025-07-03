import express from 'express';
import { routes } from './routes';
import { MongoClient } from 'mongodb'; // -> MongoClient - cria a conecxão com o banco de dados

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

interface User {
  name: string;
  email: string;
  age: number;
  job: string
}

routes(app);

const uri = "mongodb+srv://eusantosdev:Santos%402005@cluster1.vqf7ksi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"; // -> URI - identificador único da conexão com o banco de dados

const client = new MongoClient(uri);

async function main() {
  try {
    const myDB = client.db("ecommerce_api");
    const myColl = myDB.collection("users");
    const user = {
          name: 'Sara Ferreira',
          email: 'eusousara@gmail.com',
          age: 19,
          job: 'Pisicologa'
    } as User;
    const result = await myColl.insertOne(user);
    console.log(`Documento inserido na coleção user com o _id: ${result.insertedId}`);
  } catch (error) {
    console.log(`Erro no servidor, erro: ${error}`);
  }
}

main();

app.listen(port, hostname, () => {
    console.log(`Servidor rodando, link: http://${hostname}:${port}/`);
});