require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, process.env.DB_PATH),
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require("./usuario.model")(sequelize, DataTypes);
db.Veiculo = require("./veiculo.model")(sequelize, DataTypes);
db.Movimentacao = require("./movimentacao.model")(sequelize, DataTypes);

sequelize.sync({ force: false }) 
  .then(() => {
    console.log("Tabelas sincronizadas com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar tabelas:", error);
  });

module.exports = db;