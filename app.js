const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const materiRoutes = require('./routes/materiRoutes');
const evaluasiRoutes = require('./routes/evaluasiRoutes');
const db = require('./models');

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/materi', materiRoutes);
app.use('/evaluasi', evaluasiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

db.sequelize.sync();
