app.post('/zorginstelling/ziekenhuis-olvg-locatie-west-voorheen-sint-lucas-andreas-ziekenhuis-amsterdam-109428/waardeer', function (req, res) {
  let mailOpts, smtpTrans;
  console.log('form word gepost')
  //Setup Nodemailer transport, I chose gmail. 
  smtpTrans = nodemailer.createTransport({
    
      service: 'Gmail',
      auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
          user: 'kylevantil14@gmail.com',
          clientId: '153598612745-56ms1p04m238pevb1rpiv2n65p09imbv.apps.googleusercontent.com' ,
          clientSecret: 'rDkJX3Yes1VezMSwIBw3T6nk' ,
          refreshToken: '1/oHhx0-A9ihepOS1m9hQDEo08XxqYyPCL7tCmlsOUo-s'
        })
       }
  });

   //Mail options
  mailOpts = {
      from: req.body.rating[name] + ' &lt;' + req.body.rating[email][first] + '&gt;', 
      to: 'kylevantil14@gmail.com',
      subject: 'Test',
      text: req.body.rating[comment] + req.body.rating[questions][behandeling] + req.body.rating[name]
  };

    smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          console.log('There was a problem')
      }
      //Yay!! Email sent
      else {
          console.log('Email sent!')
      }
  });
});
pass nwatdvixrddkmzvr





let mailOpts, smtpTrans;
  console.log('form word gepost')
  //Setup Nodemailer transport, I chose gmail. 
  smtpTrans = nodemailer.createTransport({
    
      service: 'gmail',
      auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
          user: 'kylevantil14@gmail.com',
          clientId: '153598612745-56ms1p04m238pevb1rpiv2n65p09imbv.apps.googleusercontent.com' ,
          clientSecret: 'rDkJX3Yes1VezMSwIBw3T6nk' ,
          refreshToken: '1/oHhx0-A9ihepOS1m9hQDEo08XxqYyPCL7tCmlsOUo-s'
        })
       }
  });

   //Mail options
  mailOpts = {
      from: req.body.ratingname + ' &lt;' + req.body.ratingemailfirst + '&gt;', 
      to: 'kylevantil14@gmail.com',
      subject: 'Test',
      text: req.body.ratingcomment + req.body.ratingquestionsbehandeling + req.body.ratingname
  };

    smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          console.log('There was a problem')
      }
      //Yay!! Email sent
      else {
          console.log('Email sent!')
      }
  });