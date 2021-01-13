const mysql = require ('mysql2');
require('dotenv').config();
const faker = require('faker');

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'henchmen'
});


// Selcting data
// let q = 'SELECT COUNT(*) AS total FROM users';
// -----

// let q = 'SELECT DATE_FORMAT(MIN(created_at), "%M %D %Y") AS "earliest date" FROM users';
// RESULTS: { 'earliest date': 'January 14th 2020' }
// -----

// SUBQUERY
// let q = 'SELECT * FROM users WHERE created_at =(SELECT MIN(created_at) FROM users)';
// -----

//Group By
// let q = 'SELECT MONTHNAME(created_at) as month, COUNT(*) AS COUNT FROM users GROUP BY month'
// -----

// LIKE
// let q = 'SELECT COUNT(*) AS "yahoo_users" FROM users WHERE email LIKE "%@yahoo.com"'
//-----

//CASE
let q ='SELECT CASE WHEN email LIKE "%@gmail.com" THEN "gmail" WHEN email LIKE "%@yahoo.com" THEN "yahoo" WHEN email LIKE "%@hotmail.com" THEN "hotmail" ELSE "other" end AS provider, Count(*) AS total_users FROM  users GROUP  BY provider ORDER  BY total_users DESC'




connection.query(
    q,
    function(err, results,fields){
        if(err) throw err;
        console.log(results);
    }
);

//Inserting data single
// let new_user = {
//     email: faker.internet.email(), 
//     first_name: faker.name.firstName(),
//     last_name: faker.name.lastName(),
//     image_url: faker.image.imageUrl(),
//     created_at: faker.date.past()
//  }
// connection.query(
//         'INSERT INTO users SET ?', new_user,
//         function(err, results,fields){
//             if(err) throw err;
//             console.log(results);
//         }
//     );
//SET works with single Object but must use values without set on bulk dump

//Inserting data bulk
// let bulk_users =[];

// for (let i = 0; i < 500; i++) {
//     bulk_users.push([
//         faker.internet.email(), 
//         faker.name.firstName(),
//         faker.name.lastName(),
//         faker.image.imageUrl(),
//         faker.date.past()
//     ]);
// }

// connection.query(
//     'INSERT INTO users (email, first_name, last_name, image_url, created_at) VALUES ?', [bulk_users],
//         function(err, results,fields){
//             if(err) throw err;
//             console.log(results);
//         }
//     );


connection.end();