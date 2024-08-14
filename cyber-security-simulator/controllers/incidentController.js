const Incident = require('../models/incident');

exports.getAllIncidents = async (req, res) => {
    const incidents = await Incident.find({});
    res.render('dashboard', { user: req.session.user, incidents: incidents });
};

exports.createIncident = async (req, res) => {
    const newIncident = new Incident({
        type: req.body.type,
        severity: req.body.severity,
        attacker: req.session.user._id,
    });
    await newIncident.save();
    res.redirect('/dashboard');
};

exports.updateIncident = async (req, res) => {
    const incident = await Incident.findById(req.body.incidentId);
    incident.status = 'mitigated';
    incident.updated_at = new Date();
    incident.defender = req.session.user._id;
    await incident.save();
    res.redirect('/dashboard');
};
