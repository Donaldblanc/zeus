const { Client } = require('pg')
//postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]
const db = {};
const uri = 'postgres://barberadmin:test@localhost/zues';

const client = new Client({
  host: 'localhost',
  database: 'zues',
  user: 'barberadmin',
  password: 'test',
})

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')

    // client.query('SELECT * FROM barbers', (err, res) => {
    //   //console.log(err, res)
    //   console.log(res.rows)
    //  // client.end()
    // })


  }
})

module.exports = client;