const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendGrid/mail');
const app = express();


app.use(bodyParser.json());
//cors-->other applications can make requests as well
app.use(cors());
//app.use(express.static(path.join(__dirname, 'build')))


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/api', (req, res, next) => {
    res.send('API Status: I\'m awesome')
});


app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
    const msg = {
        to: 'garrettlove5346@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});

app.listen(8080, () => console.log(`Listening on port 8080`));

//app.listen(8080)
