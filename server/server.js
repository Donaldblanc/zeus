// backend for barbershop app. 

const express = require('express');
const app = express();
const fs = require('fs'); 
const path = require('path');
const bodyParser = require ('body-parser');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





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
  console.log(`App listening on: http://localhost:${PORT}`);
});