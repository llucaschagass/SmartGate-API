module.exports = (sequelize, DataTypes) => {
    const Veiculo = sequelize.define("Veiculo", {
      codigoveiculo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      placa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      chassi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      renavam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      autorizado: {
        type: DataTypes.STRING(1), // 'S' ou 'N'
        allowNull: false,
      },
    }, {
      tableName: "veiculos",
      timestamps: false,
    });
  
    return Veiculo;
  };  