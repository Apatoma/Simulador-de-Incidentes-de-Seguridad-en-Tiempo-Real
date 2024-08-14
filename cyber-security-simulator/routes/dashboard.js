const express = require('express');
const Incident = require('../models/incident');
const router = express.Router();

router.get('/', async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');
    }
    const incidents = await Incident.find({});
    res.render('dashboard', { user: req.session.user, incidents: incidents });
});

module.exports = router;
