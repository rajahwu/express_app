const express = require('express');
const hbs = require('hbs');

require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

const demo = {
    name: 'Rajah',
    age: 30
}

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    // res.send('Home');
    // res.render('demo');
    res.render('dynamic', {demo : demo})
})

app.get('/about', (req,res) => {
    res.send('About')
})

app.get('/about/contact', (req,res) => {
    res.send('About')
})

app.get('/about/directions', (req,res) => {
    res.send('About')
})

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
})



app.listen(port, () => console.log(`App in running on port ${port}`))

