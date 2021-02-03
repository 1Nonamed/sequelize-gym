const express = require("express");
const router = express.Router();

const {
  getClients,
  getClientById,
  addClient,
} = require("../controllers/clients");

router.get("/clients", getClients);
router.get("/client/:id", getClientById);

router.post("/clients", addClient);

module.exports = router;
