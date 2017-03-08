// require modules
const express = require('express');
const app = express();
const pug = require('pug');
const fs = require('fs')
const bodyParser = require('body-parser');
const pg = require('pg');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');


//set view engine and views
app.set('views', 'src/views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./resources/'));


//display index page
app.get('/', function ( req, res ){
  console.log('Index is displayed on localhost');
	res.render('index');
});

app.post('/zorginstelling/ziekenhuis-olvg-locatie-west-voorheen-sint-lucas-andreas-ziekenhuis-amsterdam-109428/waardeer', function (req, res) {
 let mailOpts, smtpTrans;
  console.log('form word gepost')
  //Setup Nodemailer transport, I chose gmail. 
  smtpTrans = nodemailer.createTransport({
  service : "gmail",
  auth    : {
    user     : "kylevantil14@gmail.com",

    
    pass : "kyle1993",
    
  }

});
   res.redirect('index')

   //Mail options
  mailOpts = {
      from: req.body.ratingname + ' &lt;' + req.body.ratingemailfirst + '&gt;', 
      to: 'kylevantil14@gmail.com',
      subject: 'Test'
,      text: req.body.ratingcomment + '<br>' + req.body.ratingrecommend +'<br>' + req.body.ratingname
  };

    smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          console.log('There was a problem')
          console.log(error)
      }
      //Yay!! Email sent
      else {
          console.log('Email sent!')
      }
  });
      });


//var server = app.listen(4000, function () {
//		console.log('Example app listening on port: ' + server.address().port);
//	});

app.listen(process.env.PORT)
