const client = require('../model/dbconnection');

function index(req, res, next) {

  client.query('SELECT * FROM barbers', (err, result) => {
   // console.log(result)
    //  console.log(result.rows[0]);
    res.json(result.rows);
    console.log(err);
    next();
  });

}

function insert(req, res, next) {
  console.log('Whats in the body Bruh', req.body);

  const {
    firstname,
    lastname,
    jobrole,
    rating,
    email
  } = req.body

  client.query('INSERT INTO barbers(id, firstname, lastname, jobrole, rating ,email ) VALUES(default, $1, $2, $3, $4, $5);',
    [ firstname, lastname, jobrole, rating, email
    ], (err, db) => {
      if (err) {
        //   console.log(dbc)
          console.error('Error inserting',err);
      } else {
          console.log('SUCCESS in =>', db)
          next();
      }
    });
    // need to changes this to a status message for the server.
    res.json(req.body);
}

module.exports = { index, insert };