require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = new express();
const port = 4000;
const cors = require('cors');

app.use(express.static(`${__dirname}/../build`))
app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
})

app.post('/api/newbin', (req, res)=>{
    console.log(req.body);
    const db = req.app.get('db');
    let {binName, binContent, binPrice, shelfId} = req.body;
    db.newBin([binName, binContent, binPrice, shelfId]).then((bin=>{
        res.status(200).send(bin);
    }))
})

app.put('/api/updatebin/:id', (req, res)=>{

})

app.get('/api/shelf/:id', (req,res)=>{
    const db = req.app.get('db');
    const shelf = req.params.id;
    db.getBins([shelf]).then((shelf=>{
        res.status(200).send(shelf);
    }))
})

app.delete('/api/deletebin/:id', (req,res)=>{

})






app.listen(port, ()=>{
    console.log("Listening on port " + port);
})