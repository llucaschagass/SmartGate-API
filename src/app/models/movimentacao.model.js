module.exports = (sequelize, DataTypes) => {
    const Movimentacao = sequelize.define("Movimentacao", {
      codigomovimentacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo: {
        type: DataTypes.STRING(1), // 'E' ou 'S'
        allowNull: false,
      },
      placa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      data: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    }, {
      tableName: "movimentacoes",
      timestamps: false,
    });
  
    return Movimentacao;
  };  