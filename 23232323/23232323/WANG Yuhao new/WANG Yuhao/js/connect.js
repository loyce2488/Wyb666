var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Wyb68319373*",
  database: "wyhweb"
});


const query = "CREATE TABLE `notice`  (\
  `noticeid` int(11) NOT NULL AUTO_INCREMENT,\
  `itemname` varchar(255) NOT NULL,\
  `userid` varchar(30) NOT NULL,\
  `type` varchar(30) NOT NULL,\
  `is_completed` tinyint(1) NOT NULL DEFAULT 0 COMMENT '1 is completed /0 is not',\
  `date` date NOT NULL,\
  `venue` varchar(255) NOT NULL,\
  `contact` varchar(255) NOT NULL,\
  `description` text NOT NULL,\
  `images` varchar(255) NULL DEFAULT NULL,\
  `noticetime` datetime NOT NULL COMMENT 'update',\
  PRIMARY KEY (`noticeid`)\
);"

// const query = "INSERT INTO user (userid, is_admin, nickname, gender, email, password, birthday) VALUES ('admin', 1 , 'Admin', 'm','abc@abc.com', '123456', '2002-01-03');"

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(query, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

// function createDatabase(name){
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query(`CREATE DATABASE ${name}`, function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });
// }


// createDatabase("wyhweb")

