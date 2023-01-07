const express = require ('express');
const app = express();

const path = require ('path');
const publicPath = path.resolve (__dirname, './public');

const port = process.env.PORT || 3000;

app.use ( express.static (publicPath));

app.get ('/', (req,res) => {
    res.sendFile ( path.resolve (__dirname, './views/index.html'));
});

app.get ('/register', (req,res) => {
    res.sendFile ( path.resolve (__dirname, './views/register.html'));
});

app.get ('/login', (req,res) => {
    res.sendFile ( path.resolve (__dirname, './views/login.html'));
});

app.listen (port, () => {
    console.log ('Servidor levantado en puerto ' + port);
});