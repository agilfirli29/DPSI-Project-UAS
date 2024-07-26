module.exports = (sequelize, DataTypes) => {
    const Evaluasi = sequelize.define('Evaluasi', {
      id_evaluasi: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      jawaban_1: DataTypes.STRING,
      jawaban_2: DataTypes.STRING,
      jawaban_3: DataTypes.STRING,
      jawaban_4: DataTypes.STRING,
      jawaban_5: DataTypes.STRING,
      jawaban_6: DataTypes.STRING,
      jawaban_7: DataTypes.STRING,
      jawaban_8: DataTypes.STRING,
      jawaban_9: DataTypes.STRING
    });
  
    return Evaluasi;
  };
  