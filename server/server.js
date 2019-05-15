// backend for barbershop app. 

const express = require('express');
const app = express();
const fs = require('fs'); 
const path = require('path');
// const bodyParser = require ('body-parser');
const schema  = require( './data/schema');

//import { schema } from './data/schema';

const PORT = process.env.PORT || 8090;
const shopController = require('./controllers/shopController');


//import graphqlHTTP from 'express-graphql';
const graphqlHTTP  = require('express-graphql');


 app.use(express.static(path.join(__dirname, '../client/public')));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());



// app.get('/barbers', shopController.index, (req, res)=>{
//   console.log("getting Barbers");
// });

// app.post('/addBarber',shopController.insert, (req, res) =>{
//   console.log("My Posts is good")
// });


app.get('/', (req, res) => {
  res.send('GraohQL is running')
})

app.use('/graphql', graphqlHTTP({
  schema: schema.schema,
  graphiql: true,
}))


app.get('/test', (req, res) => {
  console.log('hitting this route');
  console.log(__dirname, '/ route is the dirname');
  res.setHeader('Content-Type', 'text/html');
  res.status(200).end('<h1>THIS IS MY TEST ROUTE</h1>');
  //res.end(body);
});


app.use( (req, res, next) => {
  console.log(`${req.method} request for '${req.url}' <----> PostData : ${JSON.stringify(req.body)}`);

});


app.listen(PORT, (err)=>{
  if (err) console.log(err);
  console.log(`App listening on: http://localhost:${PORT}/graphql`);
});


// Graph QL Piece SERVER.

/*

to manually create users :  run in graphiQL
mutation {
   createContact(input: {firstName: "Donald", lastName: "Blanc", email: "testingGraph@zues.com", company: "CEO of ZUES"}) {
    id
    firstName
  }
}

*/