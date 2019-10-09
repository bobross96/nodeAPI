const express = require('express');

const app = express();

app.listen(3000,() => console.log('listening from port 3000'));   //using express and port 3000, output console log when it is on the port


app.use(express.static('public'));  //uses the express static function to host static html sites
app.use(express.json({limit: '1mb'}));

app.post('/api', (request, response) => {
    console.log('I got a request');
    console.log(request.body);
    const {latitude, longitude} = request.body
    
    response.json({
        status: 'success',
        latitude2 : latitude,
        longitude2 : longitude
    });
});