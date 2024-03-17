"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");
const passKey = require('./passkey')

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false
    },
    // user: 'dthorpe',
    // password: passKey,
    // host: 'localhost'
  });
} else {
  db = new Client({
    connectionString: getDatabaseUri(),
    // user: 'dthorpe',
    // password: passKey,
    // host: 'localhost'
  });
}

db.connect().then(() => {
  console.log('Connected to the database successfully.');
})
.catch((err) => {
  console.error('Error connecting to the database:', err);
});

module.exports = db;