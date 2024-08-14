const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
    type: String,
    severity: String,
    status: { type: String, enum: ['active', 'mitigated'], default: 'active' },
    created_at: { type: Date, default: Date.now },
    updated_at: Date,
    attacker: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    defender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Incident', incidentSchema);
