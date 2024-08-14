const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
        req.session.user = user;
        res.redirect('/dashboard');
    } else {
        res.redirect('/auth/login');
    }
};

exports.register = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = new User({
        username: req.body.username,
        password: hashedPassword,
        role: req.body.role
    });
    await user.save();
    res.redirect('/auth/login');
};
