const db = require('../models');

exports.getAllMateri = async (req, res) => {
  try {
    const materi = await db.Materi.findAll();
    res.json(materi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
