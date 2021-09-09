const express = require('express');
const Poop = require('../models/Poop.js');
const router = express.Router();
const Kakka = require('../models/Poop.js');

router.get('/', (req,res) => {
    res.send("Tervetuloa kakka-arkistoon");
});

router.post('/',async (req,res) => {
    const poop = new Poop({
        tunti: req.body.tunti,
        kesto: req.body.kesto
    });
    poop.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});


module.exports = router;