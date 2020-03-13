// Full Documentation - https://docs.turbo360.co
const express = require("express");
const router = express.Router();

const Profile = require("../models/Profile");

router.get("/profiles", (req, res) => {
  Profile.find()
    .then(profiles => {
      res.json({
        profiles
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

router.post("/profile", (req, res) => {
  Profile.create(req.body)
    .then(profile => {
      res.json({
        confirmation: "success",
        data: profile
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err
      });
    });
});

router.put("/profile/:id", function(req, res) {
  var query = { id: req.profile.id };
  newData = req.newData;

  Profile.findOneAndUpdate(query, newData, function(err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send("This profile was successfully updated.");
  });
});

module.exports = router;
