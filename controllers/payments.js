const { Payments, Clients, Memberships } = require("../models");

const getPayments = async (req, res) => {
  try {
    const results = await Payments.findAll({
      include: [Clients, Memberships],
    });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

const addPayment = async (req, res) => {
  const data = req.body;
  try {
    const results = await Payments.create(data);
    res.json({ message: results });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPayments,
  addPayment,
};
