module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
      codigousuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nomeusuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: "usuarios",
      timestamps: false,
    });
  
    return Usuario;
  };  