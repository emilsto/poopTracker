const express = require("express");
const Poop = require("../models/Poop.js");
const router = express.Router();

//get poops from DB
router.get("/", async (req, res) => {
  try {
    const poops = await Poop.find();
    res.json(poops);
  } catch {
    res.json({ message: err });
  }
});

//send poops
router.post("/", async (req, res) => { 
  const poop = new Poop({
    kakkaaja: req.body.kakkaaja,
    tunti: req.body.tunti,
    kesto: req.body.kesto,
  });
  try {
    const savedPoop = await poop.save();
    res.json(savedPoop);
  } catch (err) {
    res.json({ message: err });
  }
});

//get a specific poop
router.get("/poopId", async (req, res) => {
  const poopy = await Poop.findById(req.params.postId);
});

module.exports = router;
