const express = require("express");
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Swagger
const swaggerDocument = yaml.load(path.join(__dirname, "app/docs/swagger.yaml"));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas
const authRoutes = require("./app/routes/auth.routes");
const movimentacaoRoutes = require("./app/routes/movimentacao.routes");
const veiculoRoutes = require("./app/routes/veiculo.routes");

app.use("/api/auth", authRoutes);
app.use("/api/movimentacoes", movimentacaoRoutes);
app.use("/api/veiculos", veiculoRoutes);

module.exports = app;