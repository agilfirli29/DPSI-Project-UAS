const db = require('../models');

exports.getAllEvaluasi = async (req, res) => {
  try {
    const evaluasi = await db.Evaluasi.findAll();
    res.json(evaluasi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
