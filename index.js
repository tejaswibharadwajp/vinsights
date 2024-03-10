const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.static('build'));
app.get('*', (req, res) => res.sendFile(path.resolve( 'build', 'index.html')));

const port = 8080;
app.listen(port, () => {
    console.log('Listening on 8080')
});