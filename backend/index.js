const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());



//Database Connection
 
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'root',
    database:'bi-db',
    port:'8889'
});


//Check Database Connection
db.connect(err=>{
    if (err) {console.log(err,'dberr');}
    console.log('database connected ...');
})

//Get All Data

app.get('/nyhedsbrev', (req,res)=>{

    console.log('get all user');
     
    let qr = `select * from nyhedsbrev`;

    db.query(qr,(err,result)=>{
        if (err)
        {
            console.log(err,'errs');
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




//Get Single Data
app.get('/nyhedsbrev/:id', (req,res)=>{

    let gID = req.params.id;

    let qr = `select * from nyhedsbrev where id = ${gID}`;

    db.query(qr,(err,result)=>{

        if(err) {console.log(err);}

        if(result.length>0)
        {

            res.send({
                message:'get single data',
                data:result
            });

        }
        else
        {
            res.send({
                message:'data not found'
            });
        }


    });


});

app.get('/paragraph/:id', (req,res)=>{

    let gID = req.params.id;

    let qr = `select * from paragraph where id = ${gID}`;

    db.query(qr,(err,result)=>{

        if(err) {console.log(err);}

        if(result.length>0)
        {

            res.send({
                message:'get single data',
                data:result
            });

        }
        else
        {
            res.send({
                message:'data not found'
            });
        }


    });


});



//Create Data

app.post('/nyhedsbrev',(req,res)=>{

    console.log(req.body,'createdata');

    let forNavn = req.body.fornavn;
    let efterNavn = req.body.efternavn;
    let eMail = req.body.email;
    let tlf = req.body.tlf;

    let qr = `insert into nyhedsbrev(fornavn,efternavn,email,tlf) 
                values('${forNavn}','${efterNavn}','${eMail}','${tlf}')`;

console.log(qr, 'qr')

    db.query(qr,(err,result)=>{

        if(err) {console.log(err);}
        console.log(result,'result')
        res.send({
            message:'data inserted'
        });


    });
});




//Update Data

app.put('/nyhedsbrev/:id', (req,res)=>{


    console.log(req.body,'updatedata');

    let gID = req.params.id;
    let forNavn = req.body.fornavn;
    let efterNavn = req.body.efternavn;
    let eMail = req.body.email;
    let tlf = req.body.tlf;

    let qr = `update nyhedsbrev set fornavn = '${forNavn}',efternavn = '${efterNavn}', email = '${eMail}', tlf = '${tlf}' where id = ${gID}`;


    db.query(qr,(err,result)=>{

        if(err) {console.log(err);}

        res.send({
            message:'data updated'
        });

    });


})




//Delete Single Data

app.delete('/nyhedsbrev/:id', (req,res)=>{

    let qID = req.params.id;

    let qr = `delete from nyhedsbrev where id = '${qID}'  `;
    db.query(qr,(err,result)=>{
        if(err) {console.log(err);}

        res.send(
            {
                message:'data deleted'
            }
        )
    });

});




app.listen(3000,()=>{
    console.log('server running..');
});