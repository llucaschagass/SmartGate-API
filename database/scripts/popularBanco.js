const db = require("../../src/app/models/index");
const Veiculo = db.Veiculo;

async function popular() {
  try {
    await db.sequelize.sync();

    await Veiculo.bulkCreate([
      {
        placa: "ABC1D23",
        chassi: "9BWZZZ377VT004251",
        renavam: "12345678900",
        autorizado: "S",
      },
      {
        placa: "DEF4G56",
        chassi: "8ADZZZ377VT004888",
        renavam: "98765432100",
        autorizado: "N",
      }
    ]);

    console.log("Banco populado com sucesso!");
    process.exit();
  } catch (err) {
    console.error("Erro ao popular banco:", err);
    process.exit(1);
  }
}

popular();