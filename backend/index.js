const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2')

const app = express();

app.use(cors());
app.use(bodyparser.json());



//database connection
 
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'root',
    database:'simpledb',
    port:'8889'
});


//check database connection
db.connect(err=>{
    if (err) {console.log(err,'dberr');}
    console.log('database connected ...');
})

//get all data

app.get('/user', (req,res)=>{
     
    let qr = 'select * from user';

    db.query(qr,(err,result)=>{
        if (err)
        {
            console.log(err,'errs')
        }

        if(result.length>0)
        {
            res.send({
                message:'all user data',
                data:result
            });
        }

    });

});






app.listen(3000,()=>{
    console.log('server running..');
});