'strict mode';

const express = require('express');
<<<<<<< HEAD
=======
const emailjs = require('emailjs');
const bodyParser = require('body-parser');
const config = require('./sendgridConfig.js')
>>>>>>> 7fcc3b2... Converted "contact.component" from template-driven to a model-driven form. Added angular/material styling and updated all outdated npm dependencies.

var app = express();  
var staticRoot = __dirname;  

app.set('port', (process.env.PORT || 3000));  

app.use(express.static(staticRoot));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

<<<<<<< HEAD
app.listen(app.get('port'), function() {  
=======
app.post('/sendmail', ( req, res ) => {

    let server = emailjs.server.connect( config );
    
    //send the message and get a callback with an error or details of the message that was sent

    server.send({
    text:    `You have a message from ${ req.body.name }.`, 
    from:    req.body.email,
    to:      "nvorraso2020@gmail.com",
    subject: `New message from ${ req.body.name }`,
    attachment: 
    [
        {data:`
        <html>
            <ul style="list-style: none">
                <li><b>Name:</b> ${ req.body.name }</li>
                <li><b>Email:</b> ${ req.body.email }</li>
                <li><b>Phone:</b> ${ req.body.phone }</li>
                <li><b>Comments:</b></li>
                <li style="margin-left: 3em"><i>${ req.body.comments }</i></li>
            </ul>
        </html>`
        , alternative:true}
    ]
    }, (err, message) => { 
        if(err) {
            console.log(err);
        } else {
            res.json({success: true, msg: 'sent'});
        }
    });           
});


app.listen( app.get('port'), () => {  
>>>>>>> 7fcc3b2... Converted "contact.component" from template-driven to a model-driven form. Added angular/material styling and updated all outdated npm dependencies.
    console.log('app running on port', app.get('port'));
});