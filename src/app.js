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

// Routes
app.use("/api/auth", require("./app/routes/auth.routes"));

module.exports = app;