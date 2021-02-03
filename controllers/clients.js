const { Clients, Payments, Classes } = require("../models");

const getClients = async (req, res) => {
  try {
    const results = await Clients.findAll({
      include: [Payments],
    });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

const getClientById = async (req, res) => {
  try {
    const results = await Clients.findOne({
      include: Classes,
      where: { id: req.params.id },
    });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

const addClient = async (req, res) => {
  const data = req.body;
  try {
    const results = await Clients.create(data);
    res.json({ message: results });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getClients,
  getClientById,
  addClient,
};
