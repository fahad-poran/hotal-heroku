const express = require('express')
const { MongoClient } = require('mongodb');

const app = express()
const port = 3000

require('dotenv').config()
//username : hotel_manager
//pass: ABCD1234

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xc3fq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri);

async function run(){

    try{
        await client.connect();
        console.log('database connected');
    }
    finally{
        //await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})