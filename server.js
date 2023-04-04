const express = require('express')
const app = express()
const rxjs = require('rxjs')
const jsdom = require('jsdom')

app.listen(5555, () => console.log("I'm here"))

global.document = new jsdom.JSDOM('http://localhost:5555/').window.document
const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    headers: {
        'X-RapidAPI-Key': '785832f6dcmsh9dea2cecf6b90f1p103b35jsn9ed3f0082223',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

app.get('/', (req, res) => {
    let count = 0
    rxjs.fromEvent(global.document, 'click').subscribe(() => console.log(`clicked ${count} times`))
    res.send(`clicked ${count} times`)

    // axios.request(options).then(response => {
    //     res.status(200).send(response.data);
    // }).catch(error => {
    //     console.error(error);
    //     res.status(500).send(error)
    // });
})