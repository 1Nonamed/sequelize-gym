const express = require("express");
const router = express.Router();

const { getPayments, addPayment } = require("../controllers/payments");

router.get("/payments", getPayments);

router.post("/payments", addPayment);

module.exports = router;
