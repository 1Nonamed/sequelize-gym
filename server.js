const express = require("express");

require("dotenv").config();
const PORT = process.env.PORT || 8000;

const { Payments, Clients, Memberships, Classes } = require("./models");

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Se inició el servidor en el puerto ${PORT}`);
});

app.get("/payments", async (req, res) => {
  try {
    const results = await Payments.findAll({
      include: [Clients, Memberships],
    });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

app.post("/payments", async (req, res) => {
  const data = req.body;
  try {
    const results = await Payments.create(data);
    res.json({ message: results });
  } catch (error) {
    console.log(error);
  }
});

app.get("/clients", async (req, res) => {
  try {
    const results = await Clients.findAll({
      include: [Payments],
    });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

app.get("/client/:id", async (req, res) => {
  try {
    const results = await Clients.findOne({
      include: Classes,
      where: { id: req.params.id },
    });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

app.post("/clients", async (req, res) => {
  const data = req.body;
  try {
    const results = await Clients.create(data);
    res.json({ message: results });
  } catch (error) {
    console.log(error);
  }
});

app.get("/memberships", async (req, res) => {
  try {
    const results = await Memberships.findAll();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

app.get("/membership/:id", async (req, res) => {
  try {
    const results = await Memberships.findOne({ where: { id: req.params.id } });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

app.post("/memberships", async (req, res) => {
  const data = req.body;
  try {
    const results = await Memberships.create(data);
    res.json({ message: results });
  } catch (error) {
    console.log(error);
  }
});
