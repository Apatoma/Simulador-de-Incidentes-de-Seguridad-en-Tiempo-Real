const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: { type: String, enum: ['hacker', 'defender'], default: 'defender' },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
