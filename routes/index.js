'use strict';

const express = require('express');
const ExecutiveModel = require('../models/ExecutivesModel');
const router = express.Router();

router.get('/', async (req, res) => {
    const ceoData = await ExecutiveModel.getAllExecutiveData();
    res.render('template', {
        locals: {
            title: 'Apple CEOs',
            data: ceoData
        },
        partials: {
            body: 'partial-index'
        }
    })
})

module.exports = router;
