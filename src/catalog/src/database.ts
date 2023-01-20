import { MongoClient } from "mongodb";


const USER: string = "root";
const PASSWORD: string = "proteinapp";
const DATABASE_IP: string = "localhost";
const DATABASE_PORT: number = 8001;
const CONNECTION_STRING: string = `mongodb://${USER}:${PASSWORD}@${DATABASE_IP}:${DATABASE_PORT}`;

const client = new MongoClient(CONNECTION_STRING);
const database = client.db("catalog");
const collection = database.collection("products");

export default collection;