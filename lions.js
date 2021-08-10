const lionsRouter = require('express').Router();
const bp = require('body-parser');

const lions = [];
let id=0;

lionsRouter.use(bp.urlencoded({extended:true}));
lionsRouter.use(bp.json());

lionsRouter.route('/')
    .get((req, res) => {
        res.send(lions);
    })

lionsRouter.route('/create')
    .get((req, res) => {
        res.sendFile(__dirname + '/lionForm.html');
    })
    .post((req, res) => {
        const formData = req.body;
        id++;
        formData.id = id;
        lions.push(formData);
        res.send('Successfully stored Lion data 👍');
    })

lionsRouter.route('/:id')
    .get((req, res) => {
        if(req.params.id - 1 < lions.length){
            const lion = lions[req.params.id -1];
            res.send(lion);
        } else {
            res.send("Enter Valid id")
        }
    })
    .put((req, res) => {
        if (req.params.id - 1 < lions.length) {
            let update = req.body;
            Object.assign(lions[req.params.id - 1], update);
            res.send("Value updated 👍")
        } else {
            res.send("Enter Valid id !!")
        }
    })
    .delete((req, res) => {
        if(req.params.id - 1 < lions.length) {
            lions.splice(req.params.id - 1, 1)
            res.send("Lion Removed 👍");
        } else {
            res.send("Enter valid id !!")
        }
    })

module.exports = lionsRouter;