const bodyParser = require('body-parser');
const { response } = require('express');

const tigersRouter = require('express').Router();

const tigers = [];
let id = 0;

tigersRouter.use(bodyParser.urlencoded({extended:true}));
tigersRouter.use(bodyParser.json());

tigersRouter.route('/')
    .get((req, res) => {
        res.send(tigers);
    })

tigersRouter.route('/create')
    .get((req, res) => {
        res.sendFile(__dirname + '/tigerForm.html');
    })
    .post((req, res) => {
        const formData = req.body;
        id++;
        formData.id = id;
        tigers.push(formData);
        res.send('Successfully stored Tiger data 👍');
    })

tigersRouter.route('/:id')
    .get((req, res) => {
        const tiger = tigers[req.params.id -1];
        res.send(tiger);
    })
    .put((req, res) => {
        
        let update = req.body;
        Object.assign(tigers[req.params.id - 1], update)
        res.send("Value Updated!!")
    })
    .delete((req,res) => {
        tigers.splice(req.params.id - 1, 1)
        res.send('Tiger Removed');
    })

module.exports = tigersRouter;
