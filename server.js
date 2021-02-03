const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const clientsRouter = require("./routes/clients");
const paymentsRouter = require("./routes/payments");
const membershipsRouter = require("./routes/memberships");

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Se inició el servidor en el puerto ${PORT}`);
});

app.use(paymentsRouter);

app.use(clientsRouter);

app.use(membershipsRouter);
