module.exports = (sequelize, DataTypes) => {
    const Materi = sequelize.define('Materi', {
      id_materi: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      hari: DataTypes.STRING,
      nama: DataTypes.STRING,
      materi: DataTypes.TEXT
    });
  
    return Materi;
  };
  