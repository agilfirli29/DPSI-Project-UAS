const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');

exports.register = async (req, res) => {
  try {
    const { nama, kelamin, agama, pekerjaan, alamat, no_tlp, email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.User.create({
      nama,
      kelamin,
      agama,
      pekerjaan,
      alamat,
      no_tlp,
      email,
      username,
      password: hashedPassword
    });

    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.User.findOne({ where: { username } });

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id_user: user.id_user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
