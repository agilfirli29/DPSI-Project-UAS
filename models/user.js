module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nama: DataTypes.STRING,
      kelamin: DataTypes.STRING,
      agama: DataTypes.STRING,
      pekerjaan: DataTypes.STRING,
      alamat: DataTypes.STRING,
      no_tlp: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      buktitrans: DataTypes.TEXT
    });
  
    return User;
  };
  