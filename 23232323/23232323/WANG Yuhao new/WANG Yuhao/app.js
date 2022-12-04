const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const port = process.env.port || 3002;
var mysql = require('mysql');


app.use(express.static(__dirname));
app.use(express.static(__dirname+"/js"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


router.get("/",function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

router.get('/register',function(req,res){
    res.sendFile(path.join(__dirname+'/register.html'));
});

router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/login.html'));
});

router.post("/saveuserinfo", function(req, res, next){
    const data = req.body;
    console.log(data)
    const username = data.username
    const password = data.password
    const gender = data.gender
    const nickname = data.nickname
    const email = data.email
    const birthday = data.birthday

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Wyb68319373*",
        database: "wyhweb"
    });

    const query = `INSERT INTO user (userid, is_admin, nickname, gender, email, password, birthday) VALUES ('${username}', 1 , '${nickname}', '${gender}','${email}', '${password}', '${birthday}');`

        con.connect(function(err) {
            if (err) {
                res.status(200).send("1")
                return 
            };
            console.log("Connected!");
            con.query(query, function (err, result) {
              if (err) {
                res.status(200).send("2")
                return 
              };
              res.status(200).send("ok")
              console.log("Data Inserted");
            });
          });
})

router.post("/checkuserinfo", function(req, res, next){
    const data = req.body;
    console.log(data)
    const username = data.username
    const password = data.password
    const admin = data.admin


    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Wyb68319373*",
        database: "wyhweb"
    });

    const query = `SELECT * FROM user WHERE userid = '${username}';`

    con.connect(function(err) {
        if (err) {
            res.status(200).send("0")
            return 
        };
        console.log("Connected!");
        con.query(query, function (err, result) {
            if (err) {
                res.status(200).send("0")
                return 
            };
            if (result.length == 0){
                res.status(200).send("1")
                return
            }
            else {
                const user = result[0]
                let auth_password = user.password
                let is_admin = user.is_admin
                console.log(result);
                if (auth_password === password && admin == is_admin){
                    res.status(200).send("ok")
                }
                else if (auth_password !== password){
                    res.status(200).send("2")
                }
                else {
                    res.status(200).send("3")
                }
            }
            
        });
    });
})

app.use('/', router);
app.listen(port, () => {
    console.log(`Server is running on https://${port}.`);
});
