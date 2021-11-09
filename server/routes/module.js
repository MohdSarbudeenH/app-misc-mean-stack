const express = require("express");
const Module = require('../models/module');
const router = express.Router();

router.get("/modules", (req, res, next) => {
    Module.find().then(mod => {
        if (mod) {
            res.status(200).json({
                message: "Module fetched successfully!",
                module: mod
            });
        } else{
            res.status(404).json({
                message: "Modules not found!"
            });
        }
    })
        .catch(ex => {
            res.status(404).json({
                message: "Modules not found!" + ex
            });
        })
})

module.exports = router;
