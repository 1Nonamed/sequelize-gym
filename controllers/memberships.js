const { Memberships } = require("../models");

const getMemberships = async (req, res) => {
  try {
    const results = await Memberships.findAll();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

const getMembershipById = async (req, res) => {
  try {
    const results = await Memberships.findOne({ where: { id: req.params.id } });
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

const addMembership = async (req, res) => {
  const data = req.body;
  try {
    const results = await Memberships.create(data);
    res.json({ message: results });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMemberships,
  getMembershipById,
  addMembership,
};
